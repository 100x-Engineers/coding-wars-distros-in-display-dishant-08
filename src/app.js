function generatePrompt() {
  // Get values from form inputs
  const headerPosition = document.getElementById('header-position').value;
  const includePhoto = document.getElementById('header-photo').checked;
  // const photoURL = document.getElementById('photo-url').value;
  const professionalSummary = document.getElementsByName('professional-summary')[0].value;
  const jobTitle = document.getElementsByName('job-title')[0].value;
  const companyName = document.getElementsByName('company-name')[0].value;
  const datesWorked = document.getElementsByName('dates-worked')[0].value;
  const graduationYear = document.getElementsByName('graduation-year')[0].value;
  const institutionName = document.getElementsByName('institution-name')[0].value;
  const relevantCourses = document.getElementsByName('relevant-courses')[0].value;
  const skills = document.getElementsByName('skills')[0].value;
  const githubURL = document.getElementsByName('github-url')[0].value;
  const linkedinURL = document.getElementsByName('linkedin-url')[0].value;
  const twitterURL = document.getElementsByName('twitter-url')[0].value;

  // Create the GPT prompt based on the form data
  let prompt = `Create a personalized portfolio website with the following details:\n`;

  prompt += `Header Position: ${headerPosition}\n`;
  if (includePhoto) {
    prompt += `Include Photo in Header with URL: ${photoURL}\n`;
  }
  prompt += `Professional Summary: ${professionalSummary}\n`;
  prompt += `Job Title: ${jobTitle}\n`;
  prompt += `Company Name: ${companyName}\n`;
  prompt += `Dates Worked: ${datesWorked}\n`;
  prompt += `Graduation Year: ${graduationYear}\n`;
  prompt += `Institution Name: ${institutionName}\n`;
  prompt += `Relevant Courses: ${relevantCourses}\n`;
  prompt += `Skills: ${skills}\n`;
  prompt += `GitHub URL: ${githubURL}\n`;
  prompt += `LinkedIn URL: ${linkedinURL}\n`;
  prompt += `Twitter URL: ${twitterURL}\n`;

  // Output the formatted prompt for testing
  console.log(prompt);

  // Now, you can send this prompt to the OpenAI API for code generation
  // You will need to make an API request to OpenAI with the generated prompt
  // and handle the response in your JavaScript code.
  // Implementing the API request and handling the response is outside the scope of this code snippet.
}

// Attach an event listener to the "Generate Prompt" button
document.getElementById('generate-prompt-button').addEventListener('click', generatePrompt);
