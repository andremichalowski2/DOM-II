// --------- QuerySelectors and Event's --------------

// // * 1. [ ] `click`
const home = document.querySelectorAll("a")[0];
console.log(home);
home.addEventListener("click", (event) => {
  console.log(`Input detected ${event.target}`);
  alert("click");
});

// // * 2. [ ] `mouseover`
const about = document.querySelectorAll("a")[1];
console.log(about);
about.addEventListener("mouseover", (event) => {
  console.log(`Input detected for about`);
  alert("mouseover");
});

// // * 3. [ ] `keydown`
const blog = document.querySelectorAll("a")[2];
console.log(blog);
blog.addEventListener("keydown", (event) => {
  console.log(`Input detected for keydown ${event.target}`);
  alert("keydown");
});

// // * 4. [ ] `wheel`
const contact = document.querySelectorAll("a")[3];
console.log(contact);
contact.addEventListener("wheel", (event) => {
  console.log(`Input detected for ${event.target}`);
  alert("wheel");
});

// // * 5. [ ] `scroll`
//------ random color fxn
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);
  document.body.style.background = bgColor;
}
//Event listener
window.addEventListener("scroll", function (e) {
  console.log(`JS PARTY`);
  random_bg_color();
});

// // * 6. [ ] `select`
// Create new input element:
// 1- Create Element
const newInput = document.createElement("input");
// 2- Add Content...actually you only need input value...see below
// newInput.textContent = "Hello! What is your name? Welcome to the funbus!";
// newInput Text:
// newInput.placeholder = "this is text";
newInput.value = "selector text for the select event listener";
// // 2b- Add class
// newInput.classList.add("h1");
// 3- Select Target Parent Element
const secondaryContent = document.querySelectorAll("p")[0];
// 4- Add Element To Parent
secondaryContent.append(newInput);

const p = document.querySelectorAll("p")[0];
console.log(p);
p.addEventListener("select", (event) => {
  console.log(`Input detected for ${event.target}`);
  const selection = event.target.value.substring(
    event.target.selectionStart,
    event.target.selectionEnd
  );
  alert(`You selected: ${selection}`);
});

// // * 7. [ ] `dblclick
const funBus = document.querySelectorAll("img")[0];
funBus.addEventListener("dblclick", (event) => {
  console.log(`Input detected ${event.target}`);
  alert("dblclick the secret funbus");
});

// * 8. [] `contextmenu`(rightclick)
const btn = document.querySelectorAll(".btn")[0];
btn.addEventListener("contextmenu", (event) => {
  btn.style.height = "500px";
  btn.style.background = "purple";
});
// * 9. [] `mouseleave`
const btn2 = document.querySelectorAll(".btn")[1];
btn2.addEventListener("contextmenu", (event) => {
  btn.style.width = "500px";
});
btn2.addEventListener("mouseleave", (event) => {
  console.log(`thisisit`);
  btn.style.width = "200px";
  btn.style.height = "100px";
});

// * 10. [] `mousemove`
const btn3 = document.querySelectorAll(".btn")[2];
btn3.addEventListener("mousemove", (event) => {
  btn.style.width = "600px";
  btn.style.background = "green";
});
// * 11. [] `mouseup`
const btn32 = document.querySelectorAll(".btn")[2];
btn32.addEventListener("mouseup", (event) => {
  console.log(`test`);
  btn.style.width = "600px";
  btn.style.height = "600px";
  btn2.style.width = "600px";
  btn2.style.height = "600px";
  btn3.style.width = "600px";
  btn3.style.height = "600px";
});

// Stop Propogation
// const nav = document.querySelector('.main-navigation');
// nav.addEventListener('click', event => {
//     nav.style.background = 'purple';
//         console.log('nav');
//         // event.stopPropagation();
//         console.log('purple');
//     const navLink = document.querySelectorAll('.nav-link')[2];
//     navLink.addEventListener('click', event => {
//         console.log('yellow')
//         navLink.style.background = 'yellow';
//     })
// })

// const containerHome = document.querySelector('.intro p');
//     containerHome.addEventListener('click', e => {
//     containerHome.style.backgroundColor = 'gray';
//     e.stopPropagation();})
// const contentSection = document.querySelector('.content-section');
//     contentSection.addEventListener('click', e => {
//     contentSection.style.backgroundColor = 'black';
//      })
const kDown = document.querySelector("body");
kDown.addEventListener("keydown", (e) => {
  kDown.style.backgroundColor = "tan";
  // e.stopPropagation();
  const kUp = document.querySelector("body");
  kUp.addEventListener("keyup", (e) => {
    kUp.style.backgroundColor = "white";
  });
});

//prevented
// const home = document.querySelectorAll('a')[0];
//     console.log(home);
//         home.addEventListener('click', (e) => {
//             e.preventDefault();
//             alert('home prevented');
//         });

//more

const blocks = document.querySelector(".blocks");

const block = document.querySelectorAll(".block");
block.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log("block is clicked");
    element.style.top = "-0px";
  });
});

//------Other future options -------
// // * [ ] `drag / drop`
//     const create = document.querySelector('.form-submit');
//     console.log(navLink);
//         firstName.addEventListener('drag / drop', (e) => {
//             console.log(e.target.value);
//             alert('Hello!');
//         });

// // * [ ] `load`
//     const button = document.querySelector('button');
//     console.log(navLink);
//         firstName.addEventListener('load', (e) => {
//             console.log(e.target.value);
//             alert('Hello!');
//         });

// // * [ ] `focus`
//     const button = document.querySelector('button');
//     console.log(navLink);
//         firstName.addEventListener('focus', (e) => {
//             console.log(e.target.value);
//             alert('Hello!');
//         });

// // * [ ] `resize`
//     const button = document.querySelector('button');
//     console.log(navLink);
//         firstName.addEventListener('resize', (e) => {
//             console.log(e.target.value);
//             alert('Hello!');
//         });

// ---------- Extra Event's from Previous Cohort Lesson/Last  - ----------
// create.addEventListener('click', (e)=> {
//   default behavior happens here
//   then your code happens
//   console.log('clicked create');
//   e.preventDefault();
// });

// card.addEventListener('click', (e)=> {
//   put whatever we want to happen on the click
//   console.log(e);
// });

// firstName.addEventListener('mouseenter', (e) => {
//   e.target.style.backgroundColor = 'blue';
//   e.target.style.color = 'white';
//   setTimeout(() => {
//     alert("Hello");
//   }, 3000);
// });

// firstName.addEventListener('mouseleave', (e) => {
//   if (e.target.style.backgroundColor === 'white') {
//     e.target.style.backgroundColor = 'red';
//   } else {
//     e.target.style.backgroundColor = 'black';
//   }
//   e.target.style.backgroundColor = 'white';
//   e.target.style.color = 'black';
//   firstName.classList.toggle('red');
// });

// firstName.addEventListener('keypress', (e) => {
//   console.log(e);
//   console.log(e.code);
// });

// someFunc() {
//   console.log('clicked button');
// }

// const button = document.querySelector(".lambda-button").addEventListener('click', (event) => {
// 	console.log(event);
// 	const rand = Math.floor(Math.random() * 100);
// ​
// 	// Easter Egg :)
// 	if (rand === 42 || rand === 31) {
// 		setInterval(() => {
// 			document.body.style.backgroundColor = getRandomColor();
// 		}, 100);
// 	}
// });
// ​
// getRandomColor = () => {
// 	var letters = '0123456789ABCDEF';
// 	var color = '#';
// 	for (var i = 0; i < 6; i++) {
// 		color += letters[Math.floor(Math.random() * 16)];
// 	}
// 	return color;
// }

//----LAST NAME INPUT BOX FROM LECTURE

// const lastName = document.getElementsByName('lastname')[0];
// lastName.addEventListener('keydown', event=>{
//     console.log(`Input detected ${event.key}`);
// });

// const lastNameInput = document.querySelector('input[name="lastname"]');
// ​
// lastNameInput.addEventListener('keydown', (event) => {
// 	console.log(`Input detected keypress: ${event.key}`);
// });
