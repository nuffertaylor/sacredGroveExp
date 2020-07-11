//https://jsfiddle.net/hpksje62/1/
//http://shorturl.at/glpJN

//TODO
//make functional on pc
//add other visions
// picture on every sentence, show quote on hover, and show attribution
var app = angular.module("visionText", []);
app.controller("visionCtrl", function($scope) {
    
    $scope.hideQuote = true;
    $scope.hideImg = true;
    $scope.curAccount = "1832 Account";
    $scope.account1832 = ["At about the age of twelve years,", //1
                            " my mind become seriously impressed ", //2
                            "with regard to the all-important concerns for the welfare of my immortal soul,", //3
                            " which led me to searching the scriptures ", //4
                            "-believing, as I was taught, ", //5
                            "that they contained the word of God and thus applying myself to them. ", //4
                            "My intimate acquaintance with those of different denominations led me to marvel exceedingly,",//6
                            "for I discovered that they did not adorn their profession by a holy walk and godly conversation agreeable to what I found contained in that sacred depository.",//6
                            "This was a grief to my soul.", //6
                            "Thus, from the age of twelve years to fifteen I pondered many things in my heart ", //0
                            "concerning the situation of the world of mankind, ", //7
                            "the contentions and divisions, the wickedness and abominations, and the darkness which pervaded the minds of mankind.", //7
                            "My mind became exceedingly distressed, for I became convicted of my sins, ", //8
                            "and by searching the scriptures I found that mankind did not come unto the Lord ",//4
                            "but that they had apostatized from the true and living faith, ",//7
                            "and there was no society or denomination that was built upon the gospel of Jesus Christ as recorded in the New Testament. ",//7
                            "I felt to mourn for my own sins and for the sins of the world, ", //8
                            "for I learned in the scriptures that ",//4
                            "God was the same yesterday, today, and forever, ",//9
                            "that he was no respecter of persons, for he was God.", //10
                            "For I looked upon the sun, the glorious luminary of the earth, ", //11
                            "and also the moon, rolling in their majesty through the heavens, ", //12
                            "and also the stars shining in their courses, ", //13
                            "and the earth also upon which I stood, ", //14
                            "and the beasts of the field, and the fowls of heaven, and the fish of the waters, ", //14
                            "and also man walking forth upon the face of the earth ", //14
                            "in majesty and in the strength of beauty, ", //14
                            "whose power and intelligence in governing the things which are so exceedingly great and marvelous, ", //15
                            "even in the likeness of him who created them. ", //16
                            "And when I considered upon these things, my heart exclaimed, ", //17
                            "\"Well hath the wise man said, 'It is a fool that saith in his heart, there is no God.'\" ", //18
                            "My heart exclaimed, \"All, all these bear testimony and bespeak an omnipotent and omnipresent power, ", //19
                            "a being who maketh laws and decreeth and bindeth all things in their bounds, ", //20
                            "who filleth eternity, who was and is and will be from all eternity to eternity.\" ", //9
                            "And I considered all these things ", //17
                            "and that that being seeketh such to worship him as worship him in spirit and in truth. ",//21
                            "Therefore, I cried unto the Lord for mercy, for there was none else to whom I could go and obtain mercy. ", //22
                            "And the Lord heard my cry in the wilderness, ", //23
                            "and while in the attitude of calling upon the Lord, ", //24
                            "in the sixteenth year of my age, ", //1
                            "a pillar of light above the brightness of the sun at noonday came down from above and rested upon me. ", //25
                            "I was filled with the spirit of God, and the Lord opened the heavens upon me and I saw the Lord.", //26
                            "And he spake unto me, saying, \"Joseph, my son, thy sins are forgiven thee. ", //27
                            "Go thy way, walk in my statutes, and keep my commandments. ", //28
                            "Behold, I am the Lord of glory. I was crucified for the world, that all those who believe on my name may have eternal life. ", //29
                            "Behold, the world lieth in sin at this time, ",//7
                            //it's interesting that almost all of Joseph presuppositions were confirmed by the Savior
                            "and none doeth good, no, not one. ", //7
                            "They have turned aside from the gospel and keep not my commandments. ", //7
                            "They draw near to me with their lips while their hearts are far from me. ", //7
                            "And mine anger is kindling against the inhabitants of the earth, ", //30
                            "to visit them according to their ungodliness ", //30
                            "and to bring to pass that which hath been spoken by the mouth of the prophets and apostles. ", //31
                            "Behold and lo, I come quickly, as it is written of me, in the cloud, clothed in the glory of my Father.\"", //32
                            "My soul was filled with love, ", //33
                            "and for many days I could rejoice with great joy. ", //33
                            "The Lord was with me, ", //33
                            "but I could find none that would believe the heavenly vision. ", //34
                            "Nevertheless, I pondered these things in my heart."]; //17


    //At about the age of twelve years                        
    var dataObject1 = new Object;
    dataObject1.scripture = ["I was about fourteen years old when I received this first communication.",
                          "The boy Samuel ministered before the Lord under Eli. In those days the word of the Lord was rare; there were not many visions.",
                          "It is important to note that Joseph Smith had not attracted much notice between 1805 and 1819. He lived a rather simple life on the American frontier, an “obscure boy” as he recalled."];
    dataObject1.scripLink = ["1835 Account",
                          "1 Samuel 3:1 NIV",
                          "Richard Neitzel Holzapfel"];
    dataObject1.picture = ["joseph-smith-reading-bible.jpg", "leanIn.png"];
    //my mind become seriously impressed
    var dataObject2 = new Object;
    dataObject2.scripture = ["Our responsibility is to always be in the right condition to receive the promptings or whisperings, the revelation, the inspiration of the Spirit. But He makes the decision of how and when."];
    dataObject2.scripLink = ["D. Todd Christofferson"];
    dataObject2.picture = ["youngjsbad.jpg"];
    //with regard to the all-important concerns for the welfare of my immortal soul
    var dataObject3 = new Object;
    dataObject3.scripture = ["Honors bestowed upon me by men could not approach the inner peace provided by sealings performed in the house of the Lord."];
    dataObject3.scripLink = ["Russell M. Nelson"];
    dataObject3.picture = ["argue.jpg"];
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
    dataObject4.picture = ["josephReads.jpeg","josephReadsBible.jpg"];
    dataObject4.ref = ["https://www.churchofjesuschrist.org/study/ensign/1973/05/searching-the-scriptures-what-do-the-scriptures-say-about-the-scriptures?lang=eng"];
    //believing, as I was taught
    var dataObject5 = {};
    dataObject5.scripture = ["The sweetest union and happiness pervaded our house, and tranquility reigned in our midst.", "And they rehearsed unto me the words of their mothers, saying: We do not doubt our mothers knew it.", "[Asael Smith, Joseph's Grandfather] said that he always knew that God was going to raise up some branch of his family to be a great benefit to mankind."];
    dataObject5.scripLink = ["Lucy Mack Smith","Alma 56:48", "George A. Smith,  Millennial Star, June 24, 1865"];
    dataObject5.picture = ["smithFamily.jpg"];
    var crossRef1832 = [];
    //My intimate acquaintance with those of different denominations led me to marvel exceedingly,
    var dataObject6 = {};
    dataObject6.scripture = ["My mind at times was greatly excited, the cry and tumult were so great and incessant. The Presbyterians were most decided against the Baptists and Methodists, and used all the powers of both reason and sophistry to prove their errors, or, at least, to make the people think they were in error. On the other hand, the Baptists and Methodists in their turn were equally zealous in endeavoring to establish their own tenets and disprove all others.In the midst of this war of words and tumult of opinions, I often said to myself: What is to be done? Who of all these parties are right; or, are they all wrong together? If any one of them be right, which is it, and how shall I know it?",
                             "To profess godliness without its benign influence upon the heart, was a thing so foreign from his feelings, that his spirit was not at rest day nor night. "];
    dataObject6.scripLink = ["1838 Account",
                                "Oliver Cowdery"];
    dataObject6.picture = ["methodistCampMeeting.jpg", "methodistCamp1839.jpg", "argue.jpg", "josephPonders.jpeg"];
    var dataObject7 = {};
    dataObject7.scripture = ["Corrupt are they, and have done abominable iniquity: there is none that doeth good. God looked down from heaven upon the children of men, to see if there were any that did understand, that did seek God. Every one of them is gone back: they are altogether become filthy; there is none that doeth good, no, not one.",
                             "There was a great awakening, or excitement raised on the subject of religion, and much enquiry for the word of life. Large additions were made to the Methodist, Presbyterian, and Baptist churches. [A] general struggle was made by the leading characters of the different sects, for proselytes. Then strife seemed to take the place of that apparent union and harmony which had previously characterized the moves and exhortations of the old professors, and a cry—I am right—you are wrong—was introduced in their stead.",
                            "Thou knowest the people, that they are set on evil. So they said unto me: Make us a god, which shall go before us; for as for this Moses, the man that brought us up out of the land of Egypt, we know not what is become of him.",
                            "But there were false prophets also among the people, even as there shall be false teachers among you, who privily shall bring in damnable heresies, even denying the Lord that bought them, and bring upon themselves swift destruction. And many shall follow their pernicious ways; by reason of whom the way of truth shall be evil spoken of. And through covetousness shall they with feigned words make merchandise of you: whose judgment now of a long time lingereth not, and their damnation slumbereth not.",
                            "The brilliant minds with their philosophies, knowing much about the Christian traditions and the pagan philosophies, would combine all elements to please everybody. They replaced the simple ways and program of the Christ with spectacular rituals, colorful display, impressive pageantry, and limitless pomposity, and called it Christianity. They had replaced the glorious, divine plan of exaltation of Christ with an elaborate, colorful, man-made system."];
    dataObject7.scripLink = ["Psalm 53:1-3 KJV",
                            "Oliver Cowdery , Messenger and Advocate",
                            "Exodus 32:22-23",
                            "2 Peter 2:1-3",
                            "Spencer W. Kimball"];
    dataObject7.picture = ["worldDarkEnough.jpg",
                            "mosesTablets.jpg",
                            "darkPlanet.jpg",
                            "great-apostasy.jpg",
                            "lehi.jpg",
                            "Man-of-Rejection.jpg"];
    var dataObject8 = {};
    dataObject8.scripture = ["But your iniquities have separated between you and your God, and your sins have hid his face from you, that he will not hear.",
                                "For I will be merciful to their unrighteousness, and their sins and their lawless deeds I will remember no more.",
                                "For God did not send His Son into the world to condemn the world, but that the world through Him might be saved",
                                "If we confess our sins, He is faithful and just to forgive us our sins and to cleanse us from all unrighteousness."];
    dataObject8.scripLink = ["Isaiah 59:2",
                                "Hebrews 8:12",
                                "John 3:17",
                                "1 John 1:9"];
    dataObject8.picture = ["sinRoad.jpg","adamCast.jpeg", "Man-of-Patience.jpg"];
    var dataObject9 = {};
    dataObject9.scripture = ["Jesus Christ is the same yesterday and today and forever.", "For I the Lord do not change.", "I am Alpha and Omega, the beginning and the ending, saith the Lord, which is, and which was, and which is to come, the Almighty.",
                            "God is the same yesterday, today, and forever, but we are not. Each day, ours is the challenge to access the power of the Atonement so that we can truly change, become more Christlike, and qualify for the gift of exaltation and live eternally with God, Jesus Christ, and our families. For these powers, privileges, and gospel gifts, thanks be to God!"];
    dataObject9.scripLink = ["Hebrews 13:8", "Malachi 3:6", "Revelation 1:8", "Russell M. Nelson"];
    dataObject9.picture = ["Man-of-Kindness.jpg", 'theSameChrist.jpg'];
    var dataObject10 = {};
    dataObject10.scripture = ["Then Peter opened his mouth, and said, Of a truth I perceive that God is no respecter of persons: But in every nation he that feareth him, and worketh righteousness, is accepted with him."];
    dataObject10.scripLink = ["Acts 10:34-35"];
    dataObject10.picture = ["acts10.jpg"];
    var dataObject11 = {};
    dataObject11.scripture = ["These are they whose bodies are celestial, whose glory is that of the sun, even the glory of God, the highest of all, whose glory the sun of the firmament is written of as being typical."];
    dataObject11.scripLink = ["D&C 76:70"];
    dataObject11.picture = ["heavens.png"];
    var dataObject12 = {};
    dataObject12.scripture = ["And again, we saw the terrestrial world, and behold and lo, these are they who are of the terrestrial, whose glory differs from that of the church of the Firstborn who have received the fulness of the Father, even as that of the moon differs from the sun in the firmament."];
    dataObject12.scripLink = ["D&C 76:71"];
    dataObject12.picture = ["blueMoon.jpg"];
    var dataObject13 = {};
    dataObject13.scripture = ["And again, we saw the glory of the telestial, which glory is that of the lesser, even as the glory of the stars differs from that of the glory of the moon in the firmament."];
    dataObject13.scripLink = ["D&C 76:81"];
    dataObject13.picture = ["moon&stars.jpg"];
    var dataObject14 = {};
    dataObject14.scripture = ["And to every beast of the earth, and to every fowl of the air, and to every thing that creepeth upon the earth, wherein there is life, I have given."];
    dataObject14.scripLink = ["Genesis 1:30"];
    dataObject14.picture = ["jehovahCreates.jpg", "animalCreation.jpg", "adamCreation.jpg"];
    var dataObject15 = {};
    dataObject15.scripture = ["The glory of God is intelligence, or, in other words, light and truth."];
    dataObject15.scripLink = ["D&C 93:26"];
    dataObject15.picture = ["gloryOfGod.jpg"];
    var dataObject16 = {};
    dataObject16.scripture = ["And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth. So God created man in his own image, in the image of God created he him; male and female created he them."];
    dataObject16.scripLink = ["Genesis 1:26-27 KJV"];
    dataObject16.picture = ["adamCreation.jpg"];
    var dataObject17 = {};
    dataObject17.scripture = ["But Mary kept all these things, and pondered them in her heart."];
    dataObject17.scripLink = ["Luke 2:30 KJV"];
    dataObject17.picture = ["maryPonder.jpg", "contemplation.jpg"];
    var dataObject18 = {};
    dataObject18.scripture = ["The fool hath said in his heart, There is no God. They are corrupt, they have done abominable works, there is none that doeth good."];
    dataObject18.scripLink = ["Psalm 14:1"];
    dataObject18.picture = ["davidHarp.jpg"];
    var dataObject19 = {};
    dataObject19.scripture = ["All things denote there is a God; yea, even the earth, and all things that are upon the face of it, yea, and its motion, yea, and also all the zplanets which move in their regular form do witness that there is a Supreme Creator."];
    dataObject19.scripLink = ["Alma 30:44"];
    dataObject19.picture = ["zionPark.jpg"];
    var dataObject20 = {};
    dataObject20.scripture = ["Many now claim that truth is relative and that there is no such thing as divine law or a divine plan. Such a claim is simply not true. There is a difference between right and wrong. Truth is based upon the laws God has established for the dependability, protection, and nurturing of His children. Eternal laws operate in and affect each of our lives, whether we believe them or not."];
    dataObject20.scripLink = ["Russell M. Nelson"];
    dataObject20.picture = ["tenCommand.jpg"];
    var dataObject21 = {};
    dataObject21.scripture = ["God is Spirit, and those who worship Him must worship in spirit and truth."];
    dataObject21.scripLink = ["John 4:24 NKJV"];
    dataObject21.picture = ["spiritTruth.jpg"];
    var dataObject22 = {};
    dataObject22.scripture = ["I called upon the Lord for the first time in the place above stated. Or in other words, I made a fruitless attempt to pray; my tongue seemed to be swollen in my mouth, so that I could not utter.",
                              "After I had retired to the place where I had previously designed to go, having looked around me, and finding myself alone, I kneeled down and began to offer up the desires of my heart to God."];
    dataObject22.scripLink = ["1835 Account",
                              "1838 Account (Joseph Smith History 1:15)"];
    dataObject22.picture = ["wideVision.jpg", "lightAndDark.jpg", "lackWisdom.jpg"];
    var dataObject23 = {};
    dataObject23.scripture =["He, therefore, retired to a secret place, in a grove, but a short distance from his father's house, and knelt down, and began to call upon the Lord.",
                        "While fervently engaged in supplication, my mind was taken away from the objects with which I was surrounded, and I was enwrapped in a heavenly vision"];
    dataObject23.scripLink = ["Orson Pratt",
                                "1842 Account"];
    dataObject23.picture = ["joedark.jpg"];
    var dataObject24 = {};
    dataObject24.scripture = ["He was enabled to pray, in fervency of the spirit, and in faith. And, while thus pouring out his soul, anxiously desiring an answer from God, he, at length, saw a very bright and glorious light."];
    dataObject24.scripLink = ["Orson Pratt"];
    dataObject24.picture = ["josephPrays.jpg", "grovePrayer.jpg"];
    var dataObject25 = {};
    dataObject25.scripture =["A pillar of fire appeared above my head. It presently rested down upon me and filled me with joy unspeakable.",
                                "I saw a pillar of light exactly over my head, above the brightness of the dsun, which descended gradually until it fell upon me."];
    dataObject25.scripLink = ["1835 Account", "1838 Account"];
    dataObject25.picture = ["pillarOfFire.jpg", "josephVis.png", "circOfLight.jpg"];
    var dataObject26 = {};
    dataObject26.scripture = ["The Spirit of God speaking to the spirit of man has power to impart truth. Through the Holy Ghost the truth is woven into the very fibre and sinews of the body so that it cannot be forgotten.", "And it came to pass that as he read, he was filled with the Spirit of the Lord."];
    dataObject26.scripLink = ["Joseph Fielding Smith", "1 Nephi 1:12"];
    dataObject26.picture = ["surroundedBySpirit.jpeg", "benCrowderVis6.jpg"];
    var dataObject27 = {};
    dataObject27.scripture = ["Yea, and as often as my people repent will I forgive them their trespasses against me.",
                                "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness."];
    dataObject27.scripLink = ["Mosiah 26:30",
                                "1 John 1:9"];
    dataObject27.picture = ["cryingJoseph.jpg", "blockyFirstVision.jpg"];
    var dataObject28 = {};
    dataObject28.scripture = ["Jesus said unto her, Neither do I condemn thee: go, and sin no more."];
    dataObject28.scripLink = ["John 8:11"];
    dataObject28.picture = ["firstSculp.jpg"];
    var dataObject29 = {};
    dataObject29.scripture = ["When the light rested upon me I saw two Personages, whose brightness and glory defy all description, standing above me in the air. One of them spake unto me, calling me by name and said, pointing to the other—This is My Beloved Son. Hear Him!",
                                "Another personage soon appeared, like unto the first. He said unto me, “Thy sins are forgiven thee.” He testified unto me that Jesus Christ is the son of God.",
                                "Which suffering caused myself, even God, the greatest of all, to tremble because of pain, and to bleed at every pore, and to suffer both body and spirit—and would that I might not drink the bitter cup, and shrink— Nevertheless, glory be to the Father, and I partook and finished my preparations unto the children of men."];
    dataObject29.scripLink = ["1838 Account",
                                "1835 Account",
                                "D&C 19:18"];
    dataObject29.picture = ["Man-of-Joy.jpg"];
    var dataObject30 = {};
    dataObject30.scripture = ["For the wrath of God is revealed from heaven against all ungodliness and unrighteousness of men, who hold the truth in unrighteousness;",
                            "God’s wrath is never the capricious, self-indulgent, irritable, morally ignoble thing that human anger so often is. It is, instead, a right and necessary reaction to objective moral evil"];
    dataObject30.scripLink = ["Romans 1:18", "J.J. Packer"];
    dataObject30.picture = ["firstVisPalmyra.jpg", "glass.jpg"];
    var dataObject31 ={};
    dataObject31.scripture =["...and the stone that smote the image became a great mountain, and filled the whole earth."];
    dataObject31.scripLink =["Daniel 2:35"];
    dataObject31.picture=["mosesProphet.jpg"];
    var dataObject32 = {};
    dataObject32.scripture = ["And, behold, I come quickly; and my reward is with me, to give every man according as his work shall be."];
    dataObject32.scripLink = ["Revelation 22:12 KJV"];
    dataObject32.picture = ["ascension.jpg"];
    var dataObject33 = {};
    dataObject33.scripture = ["After which, the vision withdrew, leaving his mind in a state of calmness and peace, indesribable.",
                                "It presently rested down upon me and filled me with joy unspeakable.",
                                "For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord."];
    dataObject33.scripLink = ["Orson Pratt", "1835 Account", "Romans 8:38-39"];
    dataObject33.picture = ["contemplation.jpg"];
    var dataObject34 = {};
    dataObject34.scripture = ["It caused me serious reflection then, and often has since, how very strange it was that an obscure boy, of a little over fourteen years of age, and one, too, who was doomed to the necessity of obtaining a scanty maintenance by his daily labor, should be thought a character of sufficient importance to attract the attention of the great ones of the most popular sects of the day, and in a manner to create in them a spirit of the most bitter persecution and reviling. But strange or not, so it was, and it was often the cause of great sorrow to myself. So it was with me. I had actually seen a light, and in the midst of that light I saw two Personages, and they did in reality speak to me; had seen a vision; I knew it, and I knew that God knew it, and I could not deny it.",
        "It seems as though the adversary was aware, at a very early period of my life, that I was destined to prove a disturber and an annoyer of his kingdom; else why should the powers of darkness combine against me? Why the opposition and persecution that arose against me, almost in my infancy?"];
    dataObject34.scripLink = ["1838 Account", "1838 Account"];
    dataObject34.picture = ["americanProphet.jpg"];
    
    crossRef1832.push(dataObject1); crossRef1832.push(dataObject2); crossRef1832.push(dataObject3); crossRef1832.push(dataObject4);  crossRef1832.push(dataObject5); crossRef1832.push(dataObject4);  crossRef1832.push(dataObject6); crossRef1832.push(dataObject6); crossRef1832.push(dataObject6);
    crossRef1832.push(dataObject1);  crossRef1832.push(dataObject7); crossRef1832.push(dataObject7); crossRef1832.push(dataObject8); crossRef1832.push(dataObject4); crossRef1832.push(dataObject7); crossRef1832.push(dataObject7); crossRef1832.push(dataObject8); crossRef1832.push(dataObject4);
    crossRef1832.push(dataObject9); crossRef1832.push(dataObject10); crossRef1832.push(dataObject11); crossRef1832.push(dataObject12); crossRef1832.push(dataObject13); crossRef1832.push(dataObject14); crossRef1832.push(dataObject14); crossRef1832.push(dataObject14); crossRef1832.push(dataObject14); 
    crossRef1832.push(dataObject15); crossRef1832.push(dataObject16); crossRef1832.push(dataObject17); crossRef1832.push(dataObject18); crossRef1832.push(dataObject19); crossRef1832.push(dataObject20); crossRef1832.push(dataObject9); crossRef1832.push(dataObject17); crossRef1832.push(dataObject21);
    crossRef1832.push(dataObject22); crossRef1832.push(dataObject23); crossRef1832.push(dataObject24); crossRef1832.push(dataObject1); crossRef1832.push(dataObject25); crossRef1832.push(dataObject26); crossRef1832.push(dataObject27); crossRef1832.push(dataObject28); crossRef1832.push(dataObject29);
    crossRef1832.push(dataObject7); crossRef1832.push(dataObject7); crossRef1832.push(dataObject7); crossRef1832.push(dataObject7); crossRef1832.push(dataObject30); crossRef1832.push(dataObject30); crossRef1832.push(dataObject31); crossRef1832.push(dataObject32); crossRef1832.push(dataObject33);
    crossRef1832.push(dataObject33); crossRef1832.push(dataObject33); crossRef1832.push(dataObject34); crossRef1832.push(dataObject17);
    
    $scope.lastSelected = 0;
    
    $scope.info = function(x)
    {
        document.getElementById("i-"+$scope.lastSelected).style.color = "white";
        $scope.lastSelected = x;
        if (Math.random() < .55) //do a quote
        {
            $scope.hideQuote = false;
            $scope.hideImg = true;
            var whichScrip = (Math.round(Math.random() * (crossRef1832[x].scripture.length-1)));
            $scope.textBox1 = crossRef1832[x].scripture[whichScrip];
            $scope.author1 =  crossRef1832[x].scripLink[whichScrip];
        }
        else
        {
            $scope.hideQuote = true;
            $scope.hideImg = false;
            var whichPic = (Math.round(Math.random() * (crossRef1832[x].picture.length-1)));
            $scope.pic1 = "./imgs/" + crossRef1832[x].picture[whichPic];
        }
        document.getElementById("i-"+x).style.color = "yellow";
    };
    

    
});

//61 lines in the 1832 accout
//make an array with 61 spots
//each spot contains an array, filled with references for that line