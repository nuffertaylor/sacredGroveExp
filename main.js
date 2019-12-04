//https://jsfiddle.net/hpksje62/1/

var app = angular.module("visionText", []);
app.controller("visionCtrl", function($scope) {
    
    $scope.hideQuote = true;
    $scope.hideImg = true;
    $scope.curAccount = "1832 Account";
    $scope.account1832 = ["At about the age of twelve years,", //0
                            " my mind become seriously impressed ", //1
                            "with regard to the all-important concerns for the welfare of my immortal soul,", //2
                            " which led me to searching the scriptures ", //3
                            "-believing, as I was taught, ", //5
                            "that they contained the word of God and thus applying myself to them. ", //3
                            "My intimate acquaintance with those of different denominations led me to marvel exceedingly, for I discovered that they did not adorn their profession by a holy walk and godly conversation agreeable to what I found contained in that sacred depository. This was a grief to my soul.", //6
                            "Thus, from the age of twelve years to fifteen I pondered many things in my heart ", //0
                            "concerning the situation of the world of mankind, ",
                            "the contentions and divisions, the wickedness and abominations, and the darkness which pervaded the minds of mankind.",
                            "My mind became exceedingly distressed, for I became convicted of my sins, ",
                            "and by searching the scriptures I found that mankind did not come unto the Lord ",
                            "but that they had apostatized from the true and living faith, ",
                            "and there was no society or denomination that was built upon the gospel of Jesus Christ as recorded in the New Testament. ",
                            "I felt to mourn for my own sins and for the sins of the world, ",
                            "for I learned in the scriptures that ",
                            "God was the same yesterday, today, and forever, ",
                            "that he was no respecter of persons, for he was God.",
                            "For I looked upon the sun, the glorious luminary of the earth, ",
                            "and also the moon, rolling in their majesty through the heavens, ",
                            "and also the stars shining in their courses, ",
                            "and the earth also upon which I stood, ",
                            "and the beasts of the field, and the fowls of heaven, and the fish of the waters, ",
                            "and also man walking forth upon the face of the earth ",
                            "in majesty and in the strength of beauty, ",
                            "whose power and intelligence in governing the things which are so exceedingly great and marvelous, ",
                            "even in the likeness of him who created them. ",
                            "And when I considered upon these things, ",
                            "my heart exclaimed, ",
                            "\"Well hath the wise man said, 'It is a fool that saith in his heart, there is no God.'\" ",
                            "My heart exclaimed, \"All, all these bear testimony and bespeak an omnipotent and omnipresent power, ",
                            "a being who maketh laws and decreeth and bindeth all things in their bounds, ",
                            "who filleth eternity, who was and is and will be from all eternity to eternity.\" ",
                            "And I considered all these things and that that being seeketh such to worship him as worship him in spirit and in truth.",
                            "Therefore, I cried unto the Lord for mercy, for there was none else to whom I could go and obtain mercy. ",
                            "And the Lord heard my cry in the wilderness, ",
                            "and while in the attitude of calling upon the Lord, ",
                            "in the sixteenth year of my age, ",
                            "a pillar of light above the brightness of the sun at noonday came down from above and rested upon me. ",
                            "I was filled with the spirit of God, and the Lord opened the heavens upon me and I saw the Lord.",
                            "And he spake unto me, saying, ",
                            "\"Joseph, my son, thy sins are forgiven thee. ",
                            "Go thy way, walk in my statutes, and keep my commandments. ",
                            "Behold, I am the Lord of glory. ",
                            "I was crucified for the world, that all those who believe on my name may have eternal life. ",
                            "Behold, the world lieth in sin at this time, ",
                            "and none doeth good, no, not one. ",
                            "They have turned aside from the gospel and keep not my commandments. ",
                            "They draw near to me with their lips while their hearts are far from me. ",
                            "And mine anger is kindling against the inhabitants of the earth, ",
                            "to visit them according to their ungodliness ",
                            "and to bring to pass that which hath been spoken by the mouth of the prophets and apostles. ",
                            "Behold and lo, I come quickly, ",
                            "as it is written of me, ",
                            "in the cloud, clothed in the glory of my Father.\"",
                            "My soul was filled with love, ",
                            "and for many days I could rejoice with great joy. ",
                            "The Lord was with me, ",
                            "but I could find none that would believe the heavenly vision. ",
                            "Nevertheless, I pondered these things in my heart."];


    //At about the age of twelve years                        
    var dataObject = new Object;
    dataObject.scripture = ["I was about fourteen years old when I received this first communication.",
                          "The boy Samuel ministered before the Lord under Eli. In those days the word of the Lord was rare; there were not many visions."];
    dataObject.scripLink = ["1835 Account",
                          "1 Samuel 3:1 NIV"];
    dataObject.picture = ["joseph-smith-reading-bible.jpg"];
    //my mind become seriously impressed
    var dataObject2 = new Object;
    dataObject2.scripture = ["Our responsibility is to always be in the right condition to receive the promptings or whisperings, the revelation, the inspiration of the Spirit. But He makes the decision of how and when."];
    dataObject2.scripLink = ["D. Todd Christofferson"];
    dataObject2.picture = ["youngjsbad.jpg"];
    //with regard to the all-important concerns for the welfare of my immortal soul
    var dataObject3 = new Object;
    dataObject3.scripture = ["Honors bestowed upon me by men could not approach the inner peace provided by sealings performed in the house of the Lord."];
    dataObject3.scripLink = ["Russell M. Nelson"];
    dataObject3.picture = [""];
    dataObject3.ref = ["https://www.churchofjesuschrist.org/study/general-conference/1992/04/doors-of-death?lang=eng"];
    //which led me to searching the scriptures
    //that they contained the word of God and thus applying myself to them.
    var dataObject4 = new Object;
    dataObject4.scripture = ["Search the scriptures; for in them ye think ye have eternal life: and they are they which testify of me.", 
                            "Written scriptures, though very important, are insufficient without a living oracle, a man with the priesthood, a living prophet.",
                            "[Scripture was] written for our learning, that we through patience and comfort of the scriptures might have hope.",
                            "[Scripture is] given by inspiration of God ... is profitable for doctrine, for reproof, for correction, for instruction in righteousness: that the man of God may be perfect, throughly furnished unto all good works.",
                            "The law of the Lord is perfect, converting the soul: the testimony of the Lord is sure, making wise the simple. The statutes of the Lord are right, rejoicing the heart: the commandment of the Lord is pure, enlightening the eyes.",
                            "... were it not for these plates, which contain these records and these commandments, we must have suffered in ignorance, ... not knowing the mysteries of God. For it were not possible that our father, Lehi, could have remembered all these things, to have taught them to his children, except it were for the help of these plates."]
    dataObject4.scripLink = ["John 5:39 KJV",
                             "Robert J. Matthews",
                             "Romans 15:4",
                             "2 Timothy 3:16-17",
                             "Psalm 19:7-8",
                             "Mosiah 1:3-4"];
    dataObject4.picture = [""];
    dataObject4.ref = ["https://www.churchofjesuschrist.org/study/ensign/1973/05/searching-the-scriptures-what-do-the-scriptures-say-about-the-scriptures?lang=eng"];
    //believing, as I was taught
    var dataObject5 = {};
    dataObject5.scripture = ["And they rehearsed unto me the words of their mothers, saying: We do not doubt our mothers knew it."];
    dataObject5.scripLink = ["Alma 56:48"];
    dataObject5.picture = [""];
    var crossRef1832 = [];
    //My intimate acquaintance with those of different denominations led me to marvel exceedingly,
    var dataObject6 = {};
    dataObject6.scripture = ["My mind at times was greatly excited, the cry and tumult were so great and incessant. The Presbyterians were most decided against the Baptists and Methodists, and used all the powers of both reason and sophistry to prove their errors, or, at least, to make the people think they were in error. On the other hand, the Baptists and Methodists in their turn were equally zealous in endeavoring to establish their own tenets and disprove all others.In the midst of this war of words and tumult of opinions, I often said to myself: What is to be done? Who of all these parties are right; or, are they all wrong together? If any one of them be right, which is it, and how shall I know it?"];
    dataObject6.scripLink = ["1838 Account"];
    dataObject6.picture = ["methodistCampMeeting.jpg", "methodistCamp1839"];
    crossRef1832.push(dataObject); crossRef1832.push(dataObject2); crossRef1832.push(dataObject3); crossRef1832.push(dataObject4);  crossRef1832.push(dataObject5); crossRef1832.push(dataObject4);  crossRef1832.push(dataObject6);
    crossRef1832.push(dataObject);
    
    $scope.lastSelected = 0;
    
    $scope.info = function(x)
    {
        document.getElementById("i-"+$scope.lastSelected).style.color = "white";
        $scope.lastSelected = x;
        if (Math.random() < .5) //do a quote
        {
            $scope.hideQuote = false;
            $scope.hideImg = true;
            var whichScrip = (Math.round(Math.random() * crossRef1832[x].scripture.length-1));
            console.log(whichScrip + "was randomly chosen out of " + crossRef1832[x].scripture.length + "attributes.");
            $scope.textBox1 = crossRef1832[x].scripture[whichScrip];
            $scope.author1 =  crossRef1832[x].scripLink[whichScrip];
        }
        else
        {
            $scope.hideQuote = true;
            $scope.hideImg = false;
            var whichPic = (Math.round(Math.random() * crossRef1832[x].picture.length-1));
            console.log(whichPic + "was randomly chosen out of " + crossRef1832[x].picture.length + "attributes.");
            $scope.pic1 = "./imgs/" + crossRef1832[x].picture[whichPic];
        }
        document.getElementById("i-"+x).style.color = "yellow";
    };
    

    
});

//61 lines in the 1832 accout
//make an array with 61 spots
//each spot contains an array, filled with references for that line