document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    const chatbox = document.getElementById("chatbox");
    const muteButton = document.getElementById("mute-button");

    let isMuted = false;

    const triggers = [
        ["hello","hi", "hey"],
        ["how are you", "how are things"],
        ["what is going on", "what is up"],
        ["happy", "good", "well", "fantastic", "cool"],
        ["bad", "bored", "tired", "sad"],
        ["tell me story", "tell me joke"],
        ["thanks", "thank you"],
        ["bye", "good bye", "goodbye"],
        ["about disease", "tell me about my disease"],
        ["cold", "flu", "cough", "fever"],
        ["hypertension", "high blood pressure"],
        ["diabetes"],
        ["migraine", "headache"],
        ["cholesterol"],
        ["sore throat"],
        ["stress", "anxiety"],
        ["insomnia", "sleep issues"],
        ["allergy", "allergic reaction"],
        ["missed dose", "forgot to take medicine"],
        ["surgery", "post-surgery care"],
        ["chronic pain", "long-term pain"],
        ["heart attack", "stroke"],
        ["dehydration"],
        ["nausea", "vomiting"],
        ["digestion", "stomach issues"],
        ["mental health", "depression"],
        ["asthma"],
        ["weight management", "BMI"],
        ["joint pain"],
        ["preventive care", "check-ups"],
        ["infection", "bacterial infection"],
        ["dental emergency"],
        ["back pain"],
        ["sprain", "strain"],
        ["concussion"],
        ["muscle cramps"],
        ["sinusitis"],
        ["cold sores"],
        ["osteoporosis"],
        ["pneumonia"],
        ["UTI", "urinary tract infection"],
        ["motion sickness"],
        ["arthritis"],
        ["food poisoning"],
        ["medication side effects"],
        ["chronic fatigue"],
        ["heart health"],
        ["high cholesterol"]
    ];

    const replies = [
        [" namaste i hope you are fine how i can help u today!", "Hi!", "Hey!", "Hi there!"],
        ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"],
        ["Nothing much", "Exciting things!"],
        ["Glad to hear it"],
        ["Why?", "Cheer up buddy"],
        ["What about?", "Once upon a time..."],
        ["You're welcome", "No problem!"],
        ["Goodbye! Have a great day.", "See you later! Take care."],
        ["I'm sorry, I cannot provide medical advice. Please consult a healthcare professional."],
        ["For a cold, drink plenty of fluids, rest, and avoid heavy foods. If symptoms persist, consult a doctor."],
        ["Hypertension can be managed with a balanced diet, regular exercise, and medication as prescribed by your doctor."],
        ["Diabetes management involves monitoring blood sugar levels, following a healthy diet, and taking prescribed medications."],
        ["For flu symptoms, rest, stay hydrated, and consult a doctor if symptoms worsen or persist."],
        ["To manage a migraine, rest in a dark room, apply a cold compress, and consider over-the-counter pain relief. Consult a doctor if needed."],
        ["A balanced diet includes fruits, vegetables, lean proteins, and whole grains. Avoid excessive sugars and fats."],
        ["To reduce cholesterol, eat a heart-healthy diet, exercise regularly, and avoid trans fats. Consult your doctor for more specific advice."],
        ["For a sore throat, try gargling with warm salt water, drinking warm fluids, and avoiding irritants. Consult a doctor if symptoms persist."],
        ["Manage stress through relaxation techniques, regular exercise, and seeking support from friends or a counselor if needed."],
        ["For high fever, stay hydrated, rest, and use fever-reducing medications if necessary. Consult a doctor if the fever is very high or persistent."],
        ["Improve sleep by maintaining a regular sleep schedule, creating a comfortable sleep environment, and avoiding caffeine before bedtime."],
        ["Common allergies include pollen, dust mites, and certain foods. Manage them by avoiding triggers and using antihistamines if needed."],
        ["If you missed a dose, take it as soon as you remember unless it’s close to the time for your next dose. Consult your doctor for specific instructions."],
        ["Before surgery, follow your doctor’s instructions, avoid eating or drinking as advised, and arrange for post-surgery care."],
        ["Take medication exactly as prescribed, follow the dosage instructions, and consult your doctor if you have any questions or concerns."],
        ["Consult a doctor if you experience symptoms of concern, such as persistent pain, severe symptoms, or significant changes in health."],
        ["A healthy BMI is typically between 18.5 and 24.9. Consult a healthcare provider to determine your ideal weight based on your health needs."],
        ["For joint pain, rest, apply heat or cold, and consider over-the-counter pain relief. Consult a doctor if pain persists or worsens."],
        ["Manage chronic conditions through regular check-ups, medication as prescribed, and lifestyle modifications as recommended by your doctor."],
        ["Preventive care includes regular check-ups, vaccinations, and screenings to detect health issues early and maintain overall well-being."],
        ["Signs of a heart attack include chest pain, shortness of breath, and nausea. Seek immediate medical attention if you experience these symptoms."],
        ["Prevent dehydration by drinking plenty of fluids, especially in hot weather or during illness, and avoiding excessive caffeine and alcohol."],
        ["For nausea, try sipping ginger tea or clear fluids. Avoid strong odors and consult a doctor if nausea persists or is severe."],
        ["Improve digestion by eating high-fiber foods, staying hydrated, and avoiding heavy or fatty meals. Consult a doctor if digestive issues continue."],
        ["Symptoms of anxiety include excessive worry, restlessness, and physical symptoms like sweating or rapid heartbeat. Seek support if needed."],
        ["For food poisoning, stay hydrated, avoid solid foods initially, and consult a healthcare provider if symptoms are severe or persistent."],
        ["Medication side effects vary by drug. Consult your doctor or pharmacist for information on specific side effects and how to manage them."],
        ["Manage weight through a balanced diet, regular exercise, and monitoring your caloric intake. Consult a healthcare provider for personalized advice."],
        ["For back pain, use proper posture, avoid heavy lifting, and consider over-the-counter pain relief. Consult a doctor if pain persists."],
        ["Prevent cancer through a healthy lifestyle, avoiding tobacco, and getting regular screenings. Consult your doctor for personalized prevention strategies."],
        ["For an allergic reaction, avoid the allergen, use antihistamines, and seek medical attention if symptoms are severe or life-threatening."],
        ["Improve mental health through regular exercise, a balanced diet, and seeking professional support if needed. Mental well-being is crucial."],
        ["For an asthma attack, use your prescribed inhaler, stay calm, and seek emergency medical help if symptoms do not improve."],
        ["For a burn, cool the area with running water, cover with a sterile bandage, and seek medical attention if the burn is severe or covers a large area."],
        ["During an asthma attack, use your prescribed inhaler, stay calm, and seek emergency medical help if symptoms do not improve."],
        ["Signs of a heart attack include chest pain, shortness of breath, and nausea. Seek immediate medical attention if you experience these symptoms."],
        ["Treat motion sickness with medications, ginger, and focusing on a stable horizon. Consult a doctor if symptoms are severe or persistent."],
        ["For migraines, rest in a dark, quiet room, apply a cold compress, and use prescribed medications if necessary. Consult a doctor for frequent migraines."],
        ["Manage arthritis through medication, physical therapy, and lifestyle changes. Consult a healthcare provider for a personalized treatment plan."],
        ["Symptoms of a UTI include frequent urination, burning sensation, and cloudy urine. Consult a healthcare provider for diagnosis and treatment."],
        ["Manage chronic fatigue syndrome with a balanced approach, including rest, lifestyle changes, and support from healthcare professionals."],
        ["For headaches, use over-the-counter pain relief, rest, and stay hydrated. Consult a healthcare provider for frequent or severe headaches."],
        ["Handle digestive issues with dietary changes, hydration, and regular exercise. Consult a healthcare provider if symptoms persist or worsen."],
        ["Signs of a stroke include sudden numbness, confusion, trouble speaking, or severe headache. Seek emergency medical help immediately."],
        ["Manage osteoporosis with a diet high in calcium and vitamin D, regular exercise, and medications if prescribed by your doctor."],
        ["Symptoms of pneumonia include cough, fever, and difficulty breathing. Consult a healthcare provider for diagnosis and treatment."],
        ["For an allergic reaction, avoid the allergen, use antihistamines, and seek medical attention if symptoms are severe or life-threatening."]
    ];

    const getReply = (input) => {
        for (let i = 0; i < triggers.length; i++) {
            if (triggers[i].some(trigger => input.toLowerCase().includes(trigger))) {
                return replies[i][Math.floor(Math.random() * replies[i].length)];
            }
        }
        return "I'm sorry, I didn't understand that. Could you please clarify?";
    };

    const addChat = (userInput, botResponse) => {
        const userDiv = document.createElement("div");
        userDiv.className = "chat-message user";
        userDiv.innerHTML = `You: <span>${userInput}</span>`;
        chatbox.appendChild(userDiv);

        const botDiv = document.createElement("div");
        botDiv.className = "chat-message bot";
        botDiv.innerHTML = `Chatbot: <span>${botResponse}</span>`;
        chatbox.appendChild(botDiv);

        chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
    };

    const speak = (message) => {
        if (isMuted) return;
        const utterance = new SpeechSynthesisUtterance(message);
        const voices = speechSynthesis.getVoices();
        utterance.voice = voices.find(voice => voice.name === "Google US English") || voices[0];
        utterance.lang = "en-US";
        speechSynthesis.speak(utterance);
    };

    document.getElementById("input").addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            const userInput = inputField.value;
            inputField.value = "";
            const botResponse = getReply(userInput);
            addChat(userInput, botResponse);
            speak(botResponse);
        }
    });

    muteButton.addEventListener("click", () => {
        isMuted = !isMuted;
        muteButton.textContent = isMuted ? "Unmute" : "Mute";
    });
});

        