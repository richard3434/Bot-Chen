    const Discord = require("discord.js");


    module.exports.run = async (bot, message, args) => {


        let factsuseless = 
        [
            "Most American car horns honk in the key of F.",

            "The name Wendy was made up for the book <<Peter Pan>>.",
            
            "Barbie's full name is Barbara Millicent Roberts.",
            
            "Every time you lick a stamp, you consume 1/10 of a calorie.",
            
            "The average person falls asleep in seven minutes.",
            
            "Studies show that if a cat falls off the seventh floor of a building it has about thirty percent less chance of surviving than a cat that falls off the twentieth floor. It supposedly takes about eight floors for the cat to realize what is occurring, relax and correct itself.",
            
            "Your stomach has to produce a new layer of mucus every 2 weeks otherwise it will digest itself.",
            
            "The citrus soda 7-UP was created in 1929; '7' was selected after the original 7-ounce containers and 'UP' for the direction of the bubbles.",
            
            "101 Dalmatians, Peter Pan, Lady and the Tramp, and Mulan are the only Disney cartoons where both parents are present and don't die throughout the movie.",
            
            "A pig's orgasm lasts for 30 minutes.",
            
            "'Stewardesses' is the longest word that is typed with only the left hand.",
            
            "To escape the grip of a crocodile's jaws, push your thumbs into its eyeballs - it will let you go instantly.",
            
            "Reindeer like to eat bananas.",
            
            "No word in the English language rhymes with month, orange, silver and purple.",
            
            "The word 'samba' means 'to rub navels together.'",
            
            "Mel Blanc (the voice of Bugs Bunny) was allergic to carrots.",
            
            "The electric chair was invented by a dentist.",
            
            "The very first bomb dropped by the Allies on Berlin during World War II Killed the only elephant in the Berlin Zoo.",
            
            "More people are killed annually by donkeys than airplane crashes.",
            
            "A 'jiffy' is a unit of time for 1/100th of a second.",
            
            "A whale's penis is called a dork.",
            
            "Because of the rotation of the earth, an object can be thrown farther if it is thrown west.",
            
            "The average person spends 6 months of their life sitting at red lights.",
            
            "In 1912 a law passed in Nebraska where drivers in the country at night were required to stop every 150 yards, send up a skyrocket, wait eight minutes for the road to clear before proceeding cautiously, all the while blowing their horn and shooting off flares.",
            
            "More Monopoly money is printed in a year, than real money throughout the world.",
            
            "Caesar salad has nothing to do with any of the Caesars. It was first concocted in a bar in Tijuana, Mexico, in the 1920's.",
            
            "One quarter of the bones in your body are in your feet.",
            
            "Crocodiles and alligators are surprisingly fast on land.  Although they are rapid, they are not agile.  So, if being chased by one, run in a zigzag line to lose him or her.",
            
            "Seattle’s Fremont Bridge rises up and down more than any drawbridge in the world.",
            
            "Right-handed people live, on average; nine years longer than left handed people.",
            
            "Ten percent of the Russian government's income comes from the sale of vodka.",
            
            "In the United States, a pound of potato chips costs two hundred times more than a pound of potatoes.  ",
            
            "A giraffe can go without water longer than a camel.",
            
            "A person cannot taste food unless it is mixed with saliva. For example, if a strong-tasting substance like salt is placed on a dry tongue, the taste buds will not be able to taste it. As soon as a drop of saliva is added and the salt is dissolved, however, a definite taste sensation results. This is true for all foods.",
            
            "Nearly 80% of all animals on earth have six legs.",
            
            "In the marriage ceremony of the ancient Inca Indians of Peru, the couple was considered officially wed when they took off their sandals and handed them to each other.",
            
            "Ninety percent of all species that have become extinct have been birds.",
            
            "There is approximately one chicken for every human being in the world.",
            
            "Most collect calls are made on father's day.",
            
            "The first automobile race ever seen in the United States was held in Chicago in 1895. The track ran from Chicago to Evanston, Illinois. The winner was J. Frank Duryea, whose average speed was 71/2 miles per hour.",
            
            "Each of us generates about 3.5 pounds of rubbish a day, most of it paper.",
            
            "Women manage the money and pay the bills in  75% of all Americans households.",
            
            "A rainbow can be seen only in the morning or late afternoon. It can occur only when the sun is 40 degrees or less above the horizon.",
            
            "It has NEVER rained in Calama, a town in the Atacama Desert of Chile.",
            
            "It costs more to buy a new car today in the United States than it cost Christopher Columbus to equip and undertake three voyages to and from the New World.",
            
            "The plastic things on the end of shoelaces are called aglets.",
            
            "An eighteenth-century German named Matthew Birchinger, known as the little man of Nuremberg, played four musical instruments including the bagpipes, was an expert calligrapher, and was the most famous stage magician of his day. He performed tricks with the cup and balls that have never been explained. Yet Birchinger had no hands, legs, or thighs, and was less than 29 inches tall.",
            
            "Daylight Saving Time is not observed in most of the state of Arizona and parts of Indiana.",
            
            "Ants closely resemble human manners:  When they wake, they stretch & appear to yawn in a human manner before taking up the tasks of the day.",
            
            "Bees have 5 eyes. There are 3 small eyes on the top of a bee's head and 2 larger ones in front.",
            
            "Count the number of cricket chirps in a 15-second period, add 37 to the total, and your result will be very close to the actual outdoor Fahrenheit temperature.",
            
            "One-fourth of the world's population lives on less than $200 a year.  Ninety million people survive on less than $75 a year.",
            
            "Butterflies taste with their hind feet.",
            
            "Only female mosquito’s' bite and most are attracted to the color blue twice as much as to any other color.",
            
            "If one places a tiny amount of liquor on a scorpion, it will instantly go mad and sting itself to death.",
            
            "It is illegal to hunt camels in the state of Arizona.",
            
            "In eighteenth-century English gambling dens, there was an employee whose only job was to swallow the dice if there was a police raid.",
            
            "There are no clocks in Las Vegas gambling casinos.",
            
            "The human tongue tastes bitter things with the taste buds toward the back. Salty and pungent flavors are tasted in the middle of the tongue, sweet flavors at the tip!",
            
            "The first product to have a bar code was Wrigley’s gum. ",
            
            "When you sneeze, air and particles travel through the nostrils at speeds over100 mph.  During this time, all bodily functions stop, including your heart, contributing to the impossibility of keeping one's eyes open during a sneeze.",
            
            "Annual growth of WWW traffic is 314,000%",
            
            "60% of all people using the Internet, use it for pornography.",
            
            "In 1778, fashionable women of Paris never went out in blustery weather without a lightning rod attached to their hats.",
            
            "Sex burns 360 calories per hour.",
            
            "A raisin dropped in a glass of fresh champagne will bounce up and down continually from the bottom of the glass to the top.",
            
            "Celery has negative calories! It takes more calories to eat a piece of celery than the celery has in it.",
            
            "The average lead pencil will draw a line 35 miles long or write approximately 50,000 English words.  More than 2 billion pencils are manufactured each year in the United States. If these were laid end to end they would circle the world nine times.",
            
            "The pop you hear when you crack your knuckles is actually a bubble of gas burning.",
            
            "A literal translation of a standard traffic sign in China: Give large space to the festive dog that makes sport in the roadway.",
            
            "You burn more calories sleeping than you do watching TV.",
            
            "Larry Lewis ran the 100-yard dash in 17.8 seconds in 1969, thereby setting a new world's record for runners in the 100-years-or-older class. He was 101.",
            
            "In a lifetime the average human produces enough quarts of spit to fill 2 swimming pools.",
            
            "It's against the law to doze off under a hair dryer in Florida/against the law to slap an old friend on the back in Georgia/against the law to Play hopscotch on a Sunday in Missouri.",
            
            "Barbie's measurements, if she were life-size, would be 39-29-33.",
            
            "The human heart creates enough pressure to squirt blood 30ft.",
            
            "One third of all cancers are sun related.",
            
            "THE MOST UNUSUAL CANNONBALL: On two occasions, Miss 'Rita Thunderbird' remained inside the cannon despite a lot of gunpowder encouragement to do otherwise. She performed in a gold lamé bikini and on one of the two occasions (1977) Miss Thunderbird remained lodged in the cannon, while her bra was shot across the Thames River.",
            
            "It has been estimated that humans use only 10% of their brain.",
            
            "Valentine Tapley from Pike County, Missouri  grew chin whiskers attaining a length of twelve feet six inches from 1860 until his death 1910, protesting Abraham Lincoln's election to the presidency.",
            
            "Most Egyptians died by the time they were 30 about 300 years ago,",
            
            "For some time Frederic Chopin, the composer and pianist, wore a beard on only one side of his face, explaining: It does not matter, my audience sees only my right side.",
            
            "1 in every 4 Americans has appeared someway or another on television.",
            
            "1 in 8 Americans has worked at a McDonalds restaurant.",
            
            "70% of all boats sold are used for fishing.",
            
            "Studies have shown that children laugh an average of 300 times/day and adults 17 times/day, making the average child more optimistic, curious, and creative than the adult.",
            
            "A pregnant goldfish is called a twit.",
            
            "The shortest war in history was between Zanzibar and England in 1896. Zanzibar surrendered after 38 minutes.",
            
            "You were born with 300 bones, but by the time you are an adult you will only have 206.",
            
            "If you go blind in one eye you only lose about one fifth of your vision but all your sense of depth.",
            
            "Women blink nearly twice as much as men.",
            
            "The strongest muscle (Relative to size) in the body is the tongue.",
            
            "A Boeing 747's wingspan is longer than the Wright brother's first flight.",
            
            "American Airlines saved $40,000 in 1987 by eliminating one olive from each salad served in first-class.",
            
            "Average life span of a major league baseball: 7 pitches.",
            
            "A palindrome is a sentence or group of sentences that reads the same backwards as it does forward: Ex:  'Red rum, sir, is murder.' 'Ma is as selfless as I am.' 'Nurse, I spy gypsies. Run!'  'A man, a plan, a canal - Panama.' 'He lived as a devil, eh?'",
            
            "The first CD pressed in the US was Bruce Springsteen's 'Born in the USA'",
            
            "In 1986 Congress & President Ronald Reagan signed Public Law 99-359, which changed Daylight Saving Time from the last Sunday in April to the first Sunday in April.  It was estimated to save the nation about 300,000 barrels of oil each year by adding most of the month April to D.S.T.",
            
            "The thumbnail grows the slowest, the middle nail the fastest, nearly 4 times faster than toenails.",
            
            "The Human eyes never grow, but nose and ears never stop growing.",
            
            "The 57 on Heinz ketchup bottles represents the number of varieties of pickles the company once had. ",
            
            "Tom Sawyer was the first novel written on a typewriter.",
            
            "If Texas were a country, its GNP would be the fifth largest of any country in the world.",
            
            "There are 1 million ants for every human in the world.",
            
            "Odds of being killed by lightening? 1 in 2million/killed in a car crash? 1 in 5,000/killed by falling out of bed? 1 in 2million/killed in a plane crash? 1 in 25 million.",
            
            "Since 1978, 37 people have died by Vending Machine's falling on them.  13 people are killed annually.  All this while trying to shake merchandise out of them. 113 people have been injured.",
            
            "Half the foods eaten throughout the world today were developed by farmers in the Andes Mountains (including potatoes, maize, sweet potatoes, squash, all varieties of beans, peanuts, manioc, papayas, strawberries, mulberries and many others).",
            
            "The 'Golden Arches' of fast food chain McDonalds is more recognized worldwide than the religious cross of Christianity.",
            
            "Former basketball superstar Michael Jordan is the most recognized face in the world, more than the pope himself.",
            
            "The average talker sprays about 300 microscopic saliva droplets per minute, about 2.5 droplets per word.",
            
            "The Earth experiences 50,000 Earth quakes per year and is hit by Lightning 100 times a second.",
            
            "Every year 11,000 Americans injure themselves while trying out bizarre sexual positions.",
            
            "If we had the same mortality rate now as in 1900, more than half the people in the world today would not be alive.",
            
            "On average, Americans eat 18 acres of pizza everyday.",
            
            "Researchers at the Texas Department of Highways in Fort Worth determined the cow population of the U.S. burps some 50 million tons of valuable hydrocarbons into the atmosphere each year.  The accumulated burps of ten average cows could keep a small house adequately heated and its stove operating for a year.",
            
            "During a severe windstorm or rainstorm the Empire State Building sways several feet to either side.",
            
            "In the last 3,500 years, there have been approximately 230 years of peace throughout the civilized world.",
            
            "The Black Death reduced the population of Europe by one third in the period from 1347 to 1351.",
            
            "The average person spends about two years on the phone in a lifetime.",
            
            "Length of beard an average man would grow if he never shaved 27.5 feet",
            
            "Over 60% of all those who marry get divorced.",
            
            "400-quarter pounders can be made from 1 cow.",
            
            "A full-loaded supertanker traveling at normal speed takes at least 20 minutes to stop.",
            
            "Coca-Cola was originally green.",
            
            "Men can read smaller print than women; women can hear better.",
            
            "Hong Kong holds the most Rolls Royce’s per capita.",
            
            "Average number of days a West German goes without washing his underwear: 7",
            
            "WWII fighter pilots in the South Pacific armed their airplanes while stationed with .50 caliber machine gun ammo belts measuring 27 feet before being loaded into the fuselage. If the pilots fired all their ammo at a target, he went through `the whole 9 yards`, hence the term.",
            
            "Average number of people airborne over the US any given hour: 61,000.",
            
            "Intelligent people have more zinc and copper in their hair.",
            
            "Iceland consumes more Coca-Cola per capita than any other nation.",
            
            "In the early 1940s, the FCC assigned television's Channel 1 to mobile services (like two-way radios in taxis) but did not re-number the other channel assignments.",
            
            "The San Francisco Cable cars are the only mobile National Monuments.",
            
            "Firehouses have circular stairways originating from the old days when the engines were pulled by horses. The horses were stabled on the ground floor and figured out how to walk up straight staircases.",
            
            "The Main Library at Indiana University sinks over an inch every year because when it was built, engineers failed to take into account the weight of all the books that would occupy the building.",
            
            "111,111,111 x 111,111,111 = 12,345,678,987,654,321",
            
            "Statues in parks: If the horse has both front legs in the air, the person died in battle; if the horse has one front leg in the air, the person died as a result of wounds received in battle; if the horse has all four legs on the ground, the person died of natural causes.",
            
            "The expression 'to get fired' comes from long ago Clans that wanted to get rid of unwanted people, so they would burn their houses instead of killing them, creating the term 'Got fired'.",
            
            "'I am.' is the shortest complete sentence in the English language.",
            
            "Hershey's Kisses are called that because the machine that makes them looks like it's kissing the conveyor belt.",
            
            "The phrase `rule of thumb` is derived from an old English law, which stated that you couldn't beat your wife with anything wider than your thumb.",
            
            "The longest recorded flight of a chicken is thirteen seconds.",
            
            "The Eisenhower interstate system requires that one mile in every five must be straight in case of war or emergency, they could be used as airstrips.",
            
            "The name Jeep came from the abbreviation used in the army. G.P. for 'General Purpose' vehicle.",
            
            "The Pentagon, in Arlington, Virginia, has twice as many bathrooms as is necessary, because when it was built in the 1940s, the state of Virginia still had segregation laws requiring separate toilet facilities for blacks and whites.",
            
            "The cruise liner, Queen Elizabeth II, moves only six inches for each gallon of diesel that it burns.",
            
            "If you have three quarters, four dimes, and four pennies, you have $1.19, the largest amount of money in coins without being able to make change for a dollar.",
            
            "In Aspen Colorado, you can have a maximum income of $104,000 and still receive government subsidized housing.",
            
            "Honking of car horns for a couple that just got married is an old superstition to insure great sex.",
            
            "Dr. Kellogg introduced Kellogg's Corn Flakes in hopes that it would reduce masturbation.",
            
            "The sperm of a mouse is actually longer than the sperm of an elephant.",
            
            "In medieval France, unfaithful wives were made to chase a chicken through town naked.",
            
            "The Black Widow spider eats her mate during or after sex.",
            
            "Napoleon's penis was sold to an American Urologist for $40,000.",
            
            "Eating the heart of a male Partridge was the cure for impotence in ancient Babylon.",
            
            "A bull can inseminate 300 cows from one single ejaculation.",
            
            "When a Hawaiian woman wears a flower over her left ear, it means that she is not available.",
            
            "The [save] icon on Microsoft Word shows a floppy disk with the shutter on backwards.",
            
            "The only nation whose name begins with an 'A', but doesn't end in an 'A' is Afghanistan.",

            "The eyes of a donkey are positioned so that it can see all four feet at all times.",
            
            "Worcestershire sauce in essentially an Anchovy Ketchup.",
            
            "Rhode Island is the only state which the hammer throw is a legal high school sport.",
            
            "The average lifespan of an eyelash is five months.",
            
            "A spider has transparent blood.",
            
            "Every acre of American crops harvested contains 100 pounds of insects.",
            
            "Prince Charles is an avid collecter of toilet seats.",
            
            "The most common street name in the U.S. is Second Street.",
            
            "Tehran is the most expensive city on earth.",
            
            "The sweat drops drawn in cartoon comic strips are called pleuts.",
            
            "Babies are most likely to be born on Tuesdays.",
            
            "The HyperMart outside of Garland Texas has 58 check-outs.",
            
            "The Minneapolis phone book has 21 pages of Andersons.",
            
            "In the 1980's American migraines increased by 60%.",
            
            "Jefferson invented the dumbwaiter, the monetary system, and the folding attic ladder.",
            
            "A horse can look forward with one eye and back with the other.",
            
            "Shakespeare is quoted 33,150 times in the Oxford English dictionary.",
            
            "The word Pennsylvania is misspelled on the Liberty Bell.",
            
            "NBA superstar Michael Jordan was originally cut from his high school basketball team.",
            
            "You spend 7 years of your life in the bathroom.",
            
            "A family of 26 could go to the movies in Mexico city for the price of one in Tokyo.",
            
            "10,000 Dutch cows pass through the Amsterdam airport each year.",
            
            "Approximately every seven minutes of every day, someone in an aerobics class pulls their hamstring.",
            
            "Simplistic passwords contribute to over 80% of all computer password break-ins.",
            
            "The top 3 health-related searches on the Internet are (in this order): Depression, Allergies, & Cancer.",
            
            "Dentists have recommended that a toothbrush be kept at least 6 feet away from a toilet to avoid airborne particles resulting from the flush.",
            
            "Most dust particles in your house are made from dead skin.",
            
            "Venus is the only planet that rotates clockwise.",
            
            "It's possible to lead a cow upstairs but not downstairs.",
            
            "It was discovered on a space mission that a frog can throw up. The frog throws up its stomach first, so the stomach is dangling out of its mouth. Then the frog uses its forearms to dig out all of the stomach's contents and then swallows the stomach back down.",
            
            "Americans travel 1,144,721,000 miles by air every day",
            
            "The the U.S. you dial '911'. In Stockholm, Sweden you dial 90000",
            
            "Leonardo da Vinci could write with one hand while drawing with the other"
        ];

        let factnum = Math.floor((Math.random() * factsuseless.length));

        let factembed = new Discord.MessageEmbed()
        //.setAuthor(message.author.tag)
        .setColor("#CC22E2")
        .addField("Useless Fact", factsuseless[factnum])
        .setThumbnail(`https://78.media.tumblr.com/bae6877a04f06d34ef9464806c4a7296/tumblr_obwoxdilyJ1u349h5o1_500.gif`);


        message.channel.send(factembed);
    }
    
    module.exports.help = {
        name: "uselessfact"
    }