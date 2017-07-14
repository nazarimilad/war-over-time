use strict;
use warnings;
use Dumpvalue;

undef $/;		    # slurp mode
my $file = <>;	    # $file now contains the HTML data of the file whose name was passed as an argument

$file =~ s/.*var\s*o\s*=\s*{/{/gsm;			# delete everything before the value of the variable 'o'
$file =~ s/};.*var\s*globaltime.*/}/gsm;	# delete everything after the value of the variable 'o'

$file =~ s/{.*fields/{"fields/gsm;					# delete everything before the 'fields' attribute
$file =~ s/"description"\s*:\s*".*?"\s*,//gsm;		# delete the 'description' attribute
$file =~ s/"symbolpath"\s*:\s*".*?"\s*,//gsm;		# delete the 'symbolpath' attribute
# delete the attributes 'datats','datac','datamn','datam','datay','amount','globaltime': 
$file =~ s/,"datats".*}/}/gsm;	

# delete map data from regions we dont need: Afghanistan, Libya, etc (only data from regios of Syria and Iraq will remain):
$file =~ s/(.*?{"type_id":.*?}.*?{"type_id":.*?}.*?{"type_id":.*?}.*?{"type_id":.*?}.*?{"type_id":.*?}.*?{"type_id":.*?}).*?{"type_id":.*?}.*?{"type_id":.*?}.*?{"type_id":.*?}.*?{"type_id":.*?}.*?{"type_id":.*?}.*?{"type_id":.*?}(.*?{"type_id":.*?}).*]]}/$1$2/gsm;

my %groups = ();			# hash which contains an array of groups
my @groupNames = ("ISIS", 
				  "Iraqi Government", 
				  "Syrian YPG",  
				  "Syrian Government", 
				  "Syrian rebel groups", 
				  "Iraqi YPG", 
				  "Turkish supported Syrian rebel groups");

my $counter = 0;									# used for indexation of @groupNames
while ($file =~ /"points":\[(\[.*?\])\]}/gsm) { 	# $1 contains the data of one group
	my $groupData = $1;								# $groupData now also contains the data of one group
	my @regions = ();								# Each group has different regions

	while ($groupData =~ /\[(.*?)\]/gsm) {			# $1 contains the data of one region
		my $regionData = $1;						# $regionData now also contains the data of one region
		my @regionPoints = ();						# Each region has multiple coordinate points
		
		while ($regionData =~ /(\d+\.\d+),(\d+\.\d+)/gsm) {		# $1 contains latitude of the point, $2 contains longitude of the point
			my @coordinates = ($1,$2);							# contains $1 and $2
			push @regionPoints, [@coordinates];					# add this points coordinates to @regionPoints

		}

		push @regions, [@regionPoints];				# add this region data to @regions
		# At this point the region posses every point data belonging to it
	}

	# At this point the group posses every region data belonging to it
	$groups{$groupNames[$counter]} = [@regions];	# add this array of regions to the group
	$counter++;
}


# Get an overview of the data extracted from $file and saved into %groups
foreach my $group (keys %groups) {
	my @regions = @{$groups{$group}};
	$counter = 1; 

	print "\n" . "-"x150 . "\n";
	print "\n$group: has " . scalar @regions . " region(s)\n";
	foreach my $region (@regions) {
		my @regionPoints = @{$region};

		print "\n\tRegion $counter: has " . scalar @regionPoints . " points\n\n\t\t";
		foreach my $point (@regionPoints) {
			my @coordinates = @{$point};
			print "(" . (join ",", @coordinates) . ")\t";
		}

		$counter++;
		print "\n";
	}
}

print "\n\n";