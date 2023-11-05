// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));

*/

// Iteration 1 - using callbacks

// Perform step 0
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  
  // Perform step 1
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`
    
    // Perform step 2
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`
      
      // Perform step 3
       getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`
             
        // Perform step 4
        getInstruction('mashedPotatoes', 4, (step4) => {
         document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`
         document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
         document.getElementById("mashedPotatoesImg").hidden = false;

         // In case any error accuired add the error msg in the HTML 
       }, (error) => document.querySelector("#mashedPotatoes").innerHTML += `<li>Error: ${error}</li>` );
     }, (error) => document.querySelector("#mashedPotatoes").innerHTML += `<li>Error: ${error}</li>` );
    }, (error) => document.querySelector("#mashedPotatoes").innerHTML += `<li>Error: ${error}</li>` );
   }, (error) => document.querySelector("#mashedPotatoes").innerHTML += `<li>Error: ${error}</li>` );
 }, (error) => document.querySelector("#mashedPotatoes").innerHTML += `<li>Error: ${error}</li>` );


// Iteration 2 - using promises

// Get step 0 
obtainInstruction('steak', 0)
  
  // if you get the step 0, add it to the HTML and call the method again to return the next step
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1);
  })

  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2);
  })

  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })

  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })

  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5);
  })

  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6);
  })

  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('steak', 7);
  })

  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    document.getElementById("steakImg").hidden = false;
  })

   // In case any error accuired add the error msg in the HTML 
  .catch((err) => document.querySelector("#steak").innerHTML += `<li>Error: ${err}</li>`);
  
  
  

// Iteration 3 using async/await
async function makeBroccoli() {
 
  try {

    // wait until you get the instruction and then add it in the HTML 
    document.querySelector("#broccoli").innerHTML += `<li>${ await obtainInstruction("broccoli", 0) }</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${ await obtainInstruction("broccoli", 1) }</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${ await obtainInstruction("broccoli", 2) }</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${ await obtainInstruction("broccoli", 3) }</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${ await obtainInstruction("broccoli", 4) }</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${ await obtainInstruction("broccoli", 5) }</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>${ await obtainInstruction("broccoli", 6) }</li>`;
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
   
    // Dispaly the img once you add all the steps 
    document.getElementById("broccoliImg").hidden = false;
  } catch(e) {
    document.querySelector("#broccoli").innerHTML += `<li>Error: ${e}</li>`;
  }
}
makeBroccoli();

// Bonus 2 - Promise all
async function makeBrusselsSprouts(){
  try {

    // wait until you get all the instruction
    const iterablePromise = [
      obtainInstruction("brusselsSprouts", 0),
      obtainInstruction("brusselsSprouts", 1),
      obtainInstruction("brusselsSprouts", 2),
      obtainInstruction("brusselsSprouts", 3),
      obtainInstruction("brusselsSprouts", 4),
      obtainInstruction("brusselsSprouts", 5),
      obtainInstruction("brusselsSprouts", 6),
      obtainInstruction("brusselsSprouts", 7)
    ]
    const brusselsSprouts =  await Promise.all(iterablePromise);
    
    // Add all the steps in HTML
    for (const step of brusselsSprouts){
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
    }
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;
    
    // Dispaly the img once you add all the steps 
    document.getElementById("brusselsSproutsImg").hidden = false;

    // In case any error accuired add the error msg in the HTML 
  } catch(e) {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Error: ${e}</li>`;
  }
}
makeBrusselsSprouts();