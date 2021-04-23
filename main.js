function flip(event){
    var birthmonth = document.getElementById("month").value;
    var birthday = document.getElementById("day").value;
	var element = event.currentTarget;
    result ="";
    if(birthday==""  && birthmonth ==""){
        element.style.transform = "rotateY(0deg)";
    }
        if (birthmonth == 1 && birthday >= 20 || birthmonth == 2 && birthday <= 18){
            if(birthmonth != "" && birthday != ""){
                result = ("Aquarius");
                element.style.transform = "rotateY(180deg)";
                document.getElementById("photo").innerHTML="<img src='https://blog.instantgo.com/wp-content/uploads/2019/05/Instance-Aquarius-Personality.jpg'width=20%>";
                document.getElementById("text").innerHTML="Aquarians are extremely vulnerable and sensitive. Although you may often find them being surrounded by many friends but in reality they rarely have close friends and acquaintances. Aquarius is a universal sign which makes them public people. Hence Aquarians are often associated with clubs, organizations and forums and enthusiastically participate in intellectual discussions. Aquarians are great communicators as long as they are within their mental realm.";
                document.getElementById("output").innerHTML= result;
                 birthmonth = document.getElementById("month").value="";
                 birthday = document.getElementById("day").value="";
               }
           }
        
        if (birthmonth == 2&& birthday >= 19 || birthmonth == 3&& birthday <= 20){
            if(birthmonth != "" && birthday != ""){
                result = ("Pisces");
                element.style.transform = "rotateY(180deg)";
                document.getElementById("photo").innerHTML="<img src='https://pbs.twimg.com/profile_images/1095162244596256768/VHqtZaQE_400x400.jpg'width=20%>";
                document.getElementById("text").innerHTML="Pisceans live in their imaginary world that barely has a connection with the reality. They love to look at the world through a rosy window. When challenged by reality, Pisceans have the tendency to retreat into their world of imagination.";
                document.getElementById("output").innerHTML= result;
                birthmonth = document.getElementById("month").value="";
                birthday = document.getElementById("day").value="";
               }
        }

        if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
            if(birthmonth != "" && birthday != ""){
                result = ("Aries");
                element.style.transform = "rotateY(180deg)";
                document.getElementById("photo").innerHTML="<img src='https://pm1.narvii.com/6937/a835d694423a304cc40af873370b41efee4a668er1-1075-980v2_hq.jpg'width=20%>";
                document.getElementById("text").innerHTML="Aries demonstrate strong personality. They have strong leadership qualities and honest and straightforward. Aries often have strong determination and can’t be deterred by failures.Aries are always eager for action. They take up to leadership spontaneously. But they don’t judge the pros and cons of a situation before acting. This also makes them vulnerable.";
                document.getElementById("output").innerHTML= result;
                birthmonth = document.getElementById("month").value="";
                birthday = document.getElementById("day").value="";
               }
        }

         if (birthmonth == 4&& birthday >= 20|| birthmonth == 5 && birthday <= 20){
            if(birthmonth != "" && birthday != ""){
                result = ("Taurus");
                element.style.transform = "rotateY(180deg)";
                document.getElementById("photo").innerHTML="<img src='https://images-na.ssl-images-amazon.com/images/I/715XAiiuAKL.jpg'width=20%>";
                document.getElementById("text").innerHTML="Taureans are noted for their determination and zeal. It is not easy to distract a Taurian from his goal once he has set his target. He would stay focused on his target and would continuously strive to achieve it.Taureans attach high value to simplicity and functionality. They often live a life that is simple and devoid of luxury.";
                document.getElementById("output").innerHTML= result;
                birthmonth = document.getElementById("month").value="";
                birthday = document.getElementById("day").value="";
               }
        }

        if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20){
            if(birthmonth != "" && birthday != ""){
                result = ("Gemini");
                element.style.transform = "rotateY(180deg)";
                document.getElementById("photo").innerHTML="<img src='https://st2.depositphotos.com/3804071/5373/v/950/depositphotos_53734495-stock-illustration-neon-signs-of-the-zodiac.jpg'width=20%>";
                document.getElementById("text").innerHTML="Geminis are full of duality. They always look to a situation from dual perspective. Geminis are characterized by inconstancy and dual nature. Geminis therefore always stay confused about their feelings.Geminis however are strong communicators and express good control over language. They are often found to have knowledge over several languages.";
                document.getElementById("output").innerHTML= result;
                birthmonth = document.getElementById("month").value="";
                birthday = document.getElementById("day").value="";
               }
        }

        if (birthmonth == 6&& birthday >= 21 || birthmonth == 7&& birthday <= 22){
            if(birthmonth != "" && birthday != ""){
                result = ("Cancer");
                element.style.transform = "rotateY(180deg)";
                document.getElementById("photo").innerHTML="<img src='https://st2.depositphotos.com/3804071/5373/v/600/depositphotos_53734497-stock-illustration-neon-signs-of-the-zodiac.jpg'width=20%>";
                document.getElementById("text").innerHTML="Cancerians are emotional. Their lives are often inflicted with mood shifts. You can find a Canerian in different moods even during a day.The true emotion of Cancer however is hidden behind their composure. But they are soft creatures and can be hurt easily by unkind words.People of the Cancer zodiac sign can be prone to depression and other mental issues. However, cancers are great family people and enjoy big families around them.";
                document.getElementById("output").innerHTML= result;
                birthmonth = document.getElementById("month").value="";
                birthday = document.getElementById("day").value="";
               }
        }

        if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22){
            if(birthmonth != "" && birthday != ""){
                result = ("Leo");
                element.style.transform = "rotateY(180deg)";
                document.getElementById("photo").innerHTML="<img src='https://wallpaperaccess.com/full/1840957.jpg'width=20%>";
                document.getElementById("text").innerHTML="Leos are warm spirited. They are full of energy and always eager to jump into action. Leos crave for recognition and admiration. Leos always love to be at the centre of attraction. They strive to reach to the top in whatever they do. Leos always love to be surrounded with large crowd and admirers. However, they are often unkind to criticism and don’t take the words of critics lightly.Leos are very ambitious and choose their acquaintances carefully. They aspire for social recognition.";
                document.getElementById("output").innerHTML= result;
                birthmonth = document.getElementById("month").value="";
                birthday = document.getElementById("day").value="";
               }
        }

        if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
            if(birthmonth != "" && birthday != ""){
                result = ("Virgo");
                element.style.transform = "rotateY(180deg)";
                document.getElementById("photo").innerHTML="<img src='https://st2.depositphotos.com/3804071/5373/v/950/depositphotos_53734489-stock-illustration-neon-signs-of-the-zodiac.jpg'width=20%>";
                document.getElementById("text").innerHTML="Virgos have a keen sense of good and bad and for that they are highly discriminating. They have an intuitive sense to identify wrong motives in people. Hence, Virgos exercise extreme caution in what they do.The virgin defines purity and therefore they are endowed with the ability to distinguish the good from the bad. Hence, Virgos are also cleanliness freaks. Despite their intelligence Virgos often remain confused about the decisions they make in their life. Also, you will not find Virgos teeming with activities.";
                document.getElementById("output").innerHTML= result;
                birthmonth = document.getElementById("month").value="";
                birthday = document.getElementById("day").value="";
               }
        }

        if (birthmonth == 9&& birthday >= 23 || birthmonth == 10&& birthday <= 22){
            if(birthmonth != "" && birthday != ""){
                result = ("Libra");
                element.style.transform = "rotateY(180deg)";
                document.getElementById("photo").innerHTML="<img src='http://pakistantrends.pk/wp-content/uploads/2020/10/5d42f6b2dc924356fcff6e716bdd9845.jpg'width=20%>";
                document.getElementById("text").innerHTML="Libra is an active sign and members born under the sign are endowed with high energy. But Librans also tend to run out of their energy soon.The Libra is the ‘balance’ and members of this sign have a very balanced mind. They can be found in settling disputes often. Librans always try to maintain harmony and balance. They are also very level headed and have a keen sense for justice. Therefore, their suggestions are often highly sought after by their friends and kins.Librans are two faceted characters. They both have the cheerfulness and darkness in them.";
                document.getElementById("output").innerHTML= result;
                birthmonth = document.getElementById("month").value="";
                birthday = document.getElementById("day").value="";
               }
        }

        if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
            if(birthmonth != "" && birthday != ""){
                result = ("Scorpions");
                element.style.transform = "rotateY(180deg)";
                document.getElementById("photo").innerHTML="<img src='https://previews.123rf.com/images/littlepaw/littlepaw1704/littlepaw170400022/76710058-scorpio-zodiac-sign-horoscope-symbol-vector-illustration.jpg'width=20%>";
                document.getElementById("text").innerHTML="Scorpions are most diverse in nature and therefore present the most interesting study. Scorpios hold grudge and would wait patiently for the right moment to strike. They are not likely to forget any act of betrayal or treachery. For Scorpios what is implied is more fascinating than the obvious.Scorpios are often described as egoists. However, some of the positive traits of Scorpios are- diplomacy, intuition, intelligence, engaging, resolute, spirituality and sensitivity.";
                document.getElementById("output").innerHTML= result;
                birthmonth = document.getElementById("month").value="";
                birthday = document.getElementById("day").value="";
               }
        }

        if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
            if(birthmonth != "" && birthday != ""){
                result = ("Sagittarians");
                element.style.transform = "rotateY(180deg)";
                document.getElementById("photo").innerHTML="<img src='https://www.deccanherald.com/sites/dh/files/articleimages/2021/02/15/sagi-horoscope-951216-1613331001.jpg'width=20%>";
                document.getElementById("text").innerHTML="Sagittarians are the incurable optimists. They are always looking at the positive side of a thing. Their optimism can’t be dampened by hardships or negative results.Sagittarians often are outdoor people. They will take interest in all sorts of sports and outdoor activities. They are also adventures in nature. Although they are true to their faults but can also turn completely deaf to criticism and turn down suggestions.";
                document.getElementById("output").innerHTML= result;
                birthmonth = document.getElementById("month").value="";
                birthday = document.getElementById("day").value="";
               }
        }
         
        if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){
            if(birthmonth != "" && birthday != ""){
                result = ("Capricorn");
                element.style.transform = "rotateY(180deg)";
                document.getElementById("photo").innerHTML="<img src='https://astrotalk.com/astrology-blog/wp-content/uploads/2019/12/zodiac-sign-4374414_1920-e1577539987610.jpg'width=20%>";
                document.getElementById("text").innerHTML="Members of this sign has an insatiable desire to climb higher and during this course they can also become selfish and might not hesitate to sacrifice other’s interests in fulfilling their goals.Capricorns may seem risk averse but in reality they carefully plan all their moves ahead and rehearse them to perfection.";
                document.getElementById("output").innerHTML= result;
                birthmonth = document.getElementById("month").value="";
                birthday = document.getElementById("day").value="";
               }
              

        }else if (birthmonth>12||birthday>31){
            alert("Please enter an accurate date ! ");
            element.style.transform = "rotateY(0deg)";
            birthmonth = document.getElementById("month").value="";
            birthday = document.getElementById("day").value="";
         }
        
    
        };
    
    
    
  
	