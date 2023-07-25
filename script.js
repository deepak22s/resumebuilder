document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const summary = document.getElementById("summary").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;
    const languagesKnown = document.getElementById("languagesknown").value;
    const strengths = document.getElementById("strengths").value;
    const weakness = document.getElementById("weakness").value;
  
    const resumePreview = document.getElementById("resumePreview");
    resumePreview.innerHTML = `
      <h2>${name}</h2>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <h3>Summary</h3>
      <p>${summary}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
      <h3>Languages Known</h3>
      <p>${languagesKnown}</p>
      <h3>Strengths</h3>
      <p>${strengths}</p>
      <h3>Weakness</h3>
      <p>${weakness}</p>
    `;
  });
  