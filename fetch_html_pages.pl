use DateTime;
use LWP;

# Initialising the beginning and ending dates
print "\nBegin date (DD-MM-YYYY): ";
$dateString = <>;
print "End date   (DD-MM-YYYY): ";
$endDateString = <>;

($bDay, $bMonth, $bYear) = ($dateString =~ /(\d\d)-(\d\d)-(\d\d\d\d)/);
($eDay, $eMonth, $eYear) = ($endDateString =~ /(\d\d)-(\d\d)-(\d\d\d\d)/);

$date    = DateTime->new(year => $bYear, month => $bMonth, day => $bDay, time_zone => "local",);
$endDate = DateTime->new(year => $eYear, month => $eMonth, day => $eDay, time_zone => "local",);
$amountOfDays = $endDate->delta_days($date)->delta_days();
$counter = 1;

print "\nFetching $amountOfDays HTML pages ...\n\n";

# Creating a LWP browser instance to download the HTML page
$browser = LWP::UserAgent->new;
$browser->agent('Mozilla/5.0');
$browser->timeout(7200);
$url="http://mideast.liveuamap.com/en/time/" . $date->dmy(".");

open(TEMPLATE, "html_pages/template.html") || die "problem opening template file\n";
undef $/;
$template = <TEMPLATE>;

while ($date->dmy ne $endDate->dmy) {		# download HTML pages until we arrive at the end date
	my $response = $browser->get($url);	
	if(!$response->is_success) {
		die "Can't get $url -- ", $response->status_line;
	}
	open(FILE, ">>html_pages/" . $counter . ".html") || die "problem opening file to save\n";

	$file = $response->content;				# raw, fresh, unprocessed HTML data

	$file =~ s/.*var\s*o\s*=\s*{/{/gsm;			# delete everything before the value of the variable 'o'
	$file =~ s/};.*var\s*globaltime.*/}/gsm;	# delete everything after the value of the variable 'o'

	$file =~ s/{.*fields/{"fields/gsm;					# delete everything before the 'fields' attribute
	$file =~ s/"description"\s*:\s*".*?"\s*,//gsm;		# delete the 'description' attribute
	$file =~ s/"symbolpath"\s*:\s*".*?"\s*,//gsm;		# delete the 'symbolpath' attribute
		# delete the attributes 'datats','datac','datamn','datam','datay','amount','globaltime': 
	$file =~ s/,"datats".*}/}/gsm;

	$file =~ s/("strokeweight":)"\d+\.\d+"/$1"0.00"/gsm;	# remove borders for each group since maintainers of Liveuamap are not consistent with it
	$file =~ s/("fillopacity":)"\d+\.\d+"/$1"0.35"/gsm;		# increase the opacity of the color of each group to increase visibility 

	# Only ISIS
	#$file =~ s/{"fields":\[.*?({"type_id":\d+,"strokeweight":"\d+\.\d+","strokeopacity":"\d+\.\d+","strokecolor":"#000000","fillcolor":"#000000","fillopacity":"\d+\.\d+","points":\[\[.*?\].*?\]}).*\]}/{"fields":\[$1\]}/gsm;

	# Only SAA
	# To get only SAA, more code is needed since the Liveuamap developers not only chose the same color for Ansar Allah (Houthis) and SAA
	# but they also exchanged the position of data of this two groups in the json; during the periode 06-08-2015 - 14-09-2015
	#if(($date->day >= 6 && $date->month == 8 && $date->year == 2015) || ($date->day <= 14 && $date->month == 9 && $date->year == 2015)) {
	#	$file =~ s/{"fields":\[.*?{"type_id":\d+,"strokeweight":"\d+\.\d+","strokeopacity":"\d+\.\d+","strokecolor":"#......","fillcolor":"#FF0000","fillopacity":"\d+\.\d+","points":\[\[.*?\].*?\]}.*({"type_id":\d+,"strokeweight":"\d+\.\d+","strokeopacity":"\d+\.\d+","strokecolor":"#......","fillcolor":"#FF0000","fillopacity":"\d+\.\d+","points":\[\[.*?\].*?\]}).*\]}/{"fields":\[$1\]}/gsm;
	#}
	#else {
	#	$file =~ s/{"fields":\[.*?({"type_id":\d+,"strokeweight":"\d+\.\d+","strokeopacity":"\d+\.\d+","strokecolor":"#......","fillcolor":"#FF0000","fillopacity":"\d+\.\d+","points":\[\[.*?\].*?\]}).*\]}/{"fields":\[$1\]}/gsm;
	#}

	# Raqqa Campaign
	#$file =~ s/"fillcolor":"#00FF00"/"fillcolor":"#FFFF00"/gsm; # fill the big green hole in
	#$file =~ s/{"type_id":\d+,"strokeweight":"....","strokeopacity":"....","strokecolor":".......","fillcolor":"#000000","fillopacity":"....","points":\[\[.*?\]\]},//gsm; # Remove ISIS

	# Mosul Offensive
	#$file =~ s/"fillcolor":"#FFFF00"/"fillcolor":"#d42d3f"/gsm; # Use the same (red) color for both Iraqi and Kurdish forces
	
	$template =~ s/var o\s*=\s*{.*};/var o = $file;/gsm;	# insert the downloaded processed HTML data in the template HTML page

	$dateFormatted = $date->dmy;
	print "current date: $dateFormatted\n";
	$template =~ s/<title>.*?<\/title>/<title>$dateFormatted<\/title>/gsm;	# insert date in title of HTML page

	print FILE $template;	# save the HTML page
	close(FILE);

	$date->add(days => 1);	# increment the current date with one day																																	one day
	$counter++;
	$url="http://mideast.liveuamap.com/en/time/" . $date->dmy(".");
}

close TEMPLATE;

print "\nDone\n\n";
print "Rendering screenshots ...\n\n";

system("phantomjs take_screenshots.js $amountOfDays");		# passed argument $amountofDays tells how many screenshots should be made 

print "\nDone\n\n";
print "Creating gif animation ...\n";

$command = "convert -delay 30 -loop 0 -morph 1 ";			# loop == 0 ==> infinite loop, morph == 1 ==> makes transitions between changes smoother
for (my $i = 1; $i <= $amountOfDays; $i++) {				# in Bash, you can simply use 'convert -delay 30 -loop 0 -morph 1 screenshots/{1..370}.png gif/result.gif' 											
	$command .= "screenshots/$i.png "						# but I couldn't figure out how to do it with Perl system calls
}
$command .= " gisf/result.gif";
system($command);

print "Done\n\n";