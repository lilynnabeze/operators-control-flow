// QUESTION 3
// Science Subjects - Physics, Chemistry, Biology, Technical Drawing
// Social Science Subjects - Accounting, Commerce, Marketing, Geography
// Art Subjects - Government, Economics, Literature, History
// General Subjects - English, Mathematics
// Bolatito's classgroup = Art

function getSubjects(classGroup) {
  if (classGroup === "Art") {
    return "English, Mathematics, Government, Economics, Literature, History";
  } else if (classGroup === "Science") {
    return "English, Mathematics, Physics, Chemistry, Biology, Technical Drawing";
  } else if (classGroup === "socialScience") {
    return "English, Mathematics, Physics, Chemistry, Biology, Technical Drawing";
  } else {
    return "English, Mathematics";
  }
}

console.log(getSubjects("Art"));



// QUESTION 5
function nearestPowerOf2(pwr, num) {
  let lastMultiple = pwr;
  for (let i = pwr; i < num; i++) {
    const multiple = pwr**i;
    if (multiple > num) {
        if ((multiple - num) > (num - lastMultiple)) {
            return `The number ${lastMultiple} is the power ${pwr} nearest to ${num}`;
        } else {
          return `The number ${multiple} is the power ${pwr} nearest to ${num}`;
        }
    }
    lastMultiple = multiple
  }
}

console.log(nearestPowerOf2(2, 20));

