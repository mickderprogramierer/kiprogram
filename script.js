document.getElementById("sendQuestion").addEventListener("click", async function(){
    var question = document.getElementById("QuestionInput").value;
    var question = document.getElementById("QuestionInput").value;
    var type = document.getElementById("typeSelect").value;
    
    
            try{
                const response = await fetch(
                    "https://kiprogram-llm-worker.michael.workers.dev/?task=hausaufgabe&message=USERMESSAG/",
                {
                    method: "GET",
                    headers:{ "Content-Type":"application/json"}
                        }
                        );
                
                            if(!response.ok) {
                                throw new Error("Netzwerkantwort war nicht ok");
                            }
    
                                const data = await response.json();
    
                                document.getElementById("Antwort").innerText = data.choices[0].text;} catch (error) {
                                    document.getElementById("Antwort").innerText = "Fehler beim Abrufen der Antwort:" + error.message;}
                                });
                
            
    var answer = "Antwort auf Ihre Frage"+question+"´Type´"+ type *"`";
    document.getElementById("answer").innerText = answer;
    
    