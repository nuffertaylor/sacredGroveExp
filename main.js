//https://jsfiddle.net/hpksje62/1/

var app = angular.module("visionText", []);
app.controller("visionCtrl", function($scope) {
    
    $scope.account1832 = ["At about the age of twelve years,",
                            " my mind become seriously impressed ",
                            "with regard to the all-important concerns for the welfare of my immortal soul,",
                            " which led me to searching the scriptures -believing,",
                            " as I was taught, ",
                            "that they contained the word of God and thus applying myself to them. ",
                            "My intimate acquaintance with those of different denominations led me to marvel exceedingly, ",
                            "for I discovered that they did not adorn their profession by a holy walk and godly conversation ",
                            "agreeable to what I found contained in that sacred depository. This was a grief to my soul.",
                            "Thus, from the age of twelve years to fifteen I pondered many things in my heart ",
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

    $scope.account1835 = ["Being wrought up in my mind respecting the subject of religion, ",
                           "and looking at the different systems taught the children of men, ",
                            "I knew not who was right or who was wrong. ",
                            " And considering it of the first importance that I should be right in matters that involve eternal consequences, ",
                            "being thus perplexed in mind I retired to the silent grove and bowed down before the Lord, ",
                            "under a realizing sense that he had said (if the Bible be true), ",
                            "\"Ask, and you shall receive; knock, and it shall be opened; seek, and you shall find,\" ", 
                            "and again, ",
                            "\"If any man lack wisdom, let him ask of God, who giveth to all men liberally, and upbraideth not.\" ", 
                            "\nInformation was what I most desired at this time, ",
                            "and with a fixed determination to obtain it, ", 
                            "I called upon the Lord for the first time in the place above stated. ",
                            "Or in other words, I made a fruitless attempt to pray; ",
                            "pray; my tongue seemed to be swollen in my mouth, so that I could not utter. ",
                            "I heard a noise behind me, like some person walking towards me. ",
                            "I strove again to pray but could not. ",
                            "The noise of walking seemed to draw nearer. ",
                            "I sprung up on my feet and looked around but saw no person or thing that was calculated to produce the noise of walking.",
                            "\nI kneeled again. ",
                            "My mouth was opened and my tongue liberated, ",
                            "and I called on the Lord in mighty prayer. ",
                            "A pillar of fire appeared above my head. ",
                            "It presently rested down upon me and filled me with joy unspeakable. ",
                            "A personage appeared in the midst of this pillar of flame, ",
                            "which was spread all around and yet nothing consumed. ",
                            "Another personage soon appeared, like unto the first. ",
                            "He said unto me, \"Thy sins are forgiven thee.\" ",
                            "He testified unto me that Jesus Christ is the son of God. ",
                            "And I saw many angels in this vision. ",
                            "I was about fourteen years old when I received this first communication."];

    var dataObject = new Object;
    dataObject.scripture = ["I was about fourteen years old when I received this first communication.",
                            "The boy Samuel ministered before the Lord under Eli. In those days the word of the Lord was rare; there were not many visions."];
    dataObject.scripLink = ["1835 Account",
                            "1 Samuel 3:1 NIV"];
    dataObject.picture = ["./imgs/joseph-smith-reading-bible.jpg"]
    var dataObject2 = new Object;
    dataObject2.scripture = ["Our responsibility is to always be in the right condition to receive the promptings or whisperings, the revelation, the inspiration of the Spirit. But He makes the decision of how and when."];
    dataObject2.scripLink = ["D. Todd Christofferson"];
    dataObject2.picture = ["./imgs/youngjsbad.jpg"];
    var dataObject3 = new Object;
    dataObject3.scripture = ["Honors bestowed upon me by men could not approach the inner peace provided by sealings performed in the house of the Lord."]
    dataObject3.scripLink = ["Russell M. Nelson"];
    dataObject3.picture = [""];
    dataObject3.ref = ["https://www.churchofjesuschrist.org/study/general-conference/1992/04/doors-of-death?lang=eng"]
    var crossRef1832 = [];
    crossRef1832.push(dataObject);
    crossRef1832.push(dataObject2);
    crossRef1832.push(dataObject3);
    $scope.lastSelected = 0;

    $scope.info = function(x)
    {
        //correctly passes in index
        document.getElementById("i-"+$scope.lastSelected).style.color = "white";
        $scope.lastSelected = x;
        var whichScrip = (Math.round(Math.random() * crossRef1832[x].scripture.length-1));
        $scope.textBox1 = crossRef1832[x].scripture[whichScrip];
        $scope.author1 =  crossRef1832[x].scripLink[whichScrip];
        $scope.pic1 = crossRef1832[x].picture[0];
        document.getElementById("i-"+x).style.color = "yellow";
    };
    

    
});

//61 lines in the 1832 accout
//make an array with 61 spots
//each spot contains an array, filled with references for that line