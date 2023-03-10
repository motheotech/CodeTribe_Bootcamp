window.onload = function(){
    const name = "Naledi Motheo"
    let bio = `I am a self-learning web development student
                who loves learning and exploring new technologies.
                I have been coding since I was a 16 and attedent a few bootcamps(was unsuccesful).
                I am constantly striving to learn more and build on my skills.
                I am passionate about creating beautiful and efficient web applications, and
                I am always looking for ways to improve my work.
                I work hard to stay up to date with the latest trends and best practices
                in web development,and I am always excited to try out new ideas.
                I am always eager to expand my knowledgebase and take on new challenges. `
 
    let address = `Drieziek 5
                   Orange Farm
                   Johannesburg
                   1841`
                   
    document.getElementById("name").innerHTML = name;
    document.getElementById("bio").innerHTML = bio;
    document.getElementById("address").innerHTML = address;
}