 
document.getElementById('generate-prompt-button').addEventListener('click', function() {
  //  Initialize an error message
let errorMessage = '';

  // Get values from the form inputs
  const template = document.querySelector('input[name="template"]:checked');
  const professionalSummary = document.getElementsByName('professional-summary')[0].value;
  const jobTitle = document.getElementsByName('job-title')[0].value;
     const company = document.getElementsByName('company-name')[0].value;
    // const datesWorked = document.getElementsByName('dates-worked')[0].value;
  const graduationYear = document.getElementsByName('graduation-year')[0].value;
  const institutionName = document.getElementsByName('institution-name')[0].value;
  const relevantCourses = document.getElementsByName('relevant-courses')[0].value;
  const skills = document.getElementsByName('skills')[0].value;
  const headerPosition = document.getElementById('header-position').value;
   const includePhoto = document.getElementById('header-photo').checked;
  const photoURL = document.getElementsByName('photo-url')[0].value;
   const primaryColor = document.getElementsByName('primary-color')[0].value;
   const fontSize = document.getElementById('font-size').value;
   const fontFamily = document.getElementById('font-family').value;
   const githubURL = document.getElementsByName('github-url')[0].value;
  const linkedinURL = document.getElementsByName('linkedin-url')[0].value;
   const twitterURL = document.getElementsByName('twitter-url')[0].value;

  //  Validate the inputs
   if (!template) {
       errorMessage += 'Select a template\n';
     }
     if (!professionalSummary) {
       errorMessage += 'Professional Summary is required\n';
     }
     if (!jobTitle) {
       errorMessage += 'Job Title is required\n';
     }
     if (!company) {
       errorMessage += 'Company Name is required\n';
     }
  //  if (!datesWorked) {
  // //  errorMessage += 'Dates Worked is required\n';
  // }
   if (!graduationYear || graduationYear < 2005 || graduationYear > 2025) {
       errorMessage += 'Enter a valid Graduation Year (2005 - 2025)\n';
     }
     if (!institutionName) {
       errorMessage += 'Institution Name is required\n';
     }
     // Add validation for other fields as needed

  // If there are errors, display the error message
    if (errorMessage) {
     alert('Please correct the following errors:\n' + errorMessage);
  } else {
       // Create the GPT prompt and proceed with API request
       let prompt = `Create a personalized portfolio website with the following details:\n`;
      prompt += `Header Position: ${headerPosition}\n`;
       if (includePhoto) {
         prompt += `Include Photo in Header with URL: ${photoURL}\n`;
       }
       prompt += `Professional Summary: ${professionalSummary}\n`;
       prompt += `Job Title: ${jobTitle}\n`;
       prompt += `Company Name: ${company}\n`;
    //  prompt += `Dates Worked: ${datesWorked}\n`;
     prompt += `Graduation Year: ${graduationYear}\n`;
       prompt += `Institution Name: ${institutionName}\n`;
       prompt += `Relevant Courses: ${relevantCourses}\n`;
       prompt += `Skills: ${skills}\n`;
       prompt += `GitHub URL: ${githubURL}\n`;
       prompt += `LinkedIn URL: ${linkedinURL}\n`;
       prompt += `Twitter URL: ${twitterURL}\n`;
       prompt += `Primary Color: ${primaryColor}\n`;
       prompt += `Font Size: ${fontSize}\n`;
       prompt += `Font Family: ${fontFamily}\n`;

  //     // Output the formatted prompt for testing
     console.log(prompt);

     const see = document.getElementById('see-prompt');
     see.append(prompt);

     const completions = require('./completions');

        // Get the array of completion HTML
        const completionArray = completions.getCompletions();

        // Access the div where you want to display the content
        const resumeContentDiv = document.getElementById('resume-content');

        // Append each completion HTML to the div
        completionArray.forEach((html) => {
            resumeContentDiv.innerHTML += html;
        });

  //     // Now, you can send this prompt to the OpenAI API for code generation
  //     // You will need to make an API request to OpenAI with the generated prompt
  //     // and handle the response in your JavaScript code. Implementing the API request
  //     // and handling the response is outside the scope of this code snippet.
    }
 });
 


