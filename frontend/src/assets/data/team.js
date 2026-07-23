import president from '../images/members/President.webp';
import vpresident from '../images/members/VicePresident.webp';
import secratary from '../images/members/Secratary.webp';
import socialmediahandler from '../images/members/SocialMediaHandler.webp';
import graphicdesigner from '../images/members/GraphicDesigner.webp';
import clubcoordinatior from '../images/members/ClubCoordinator.webp'
import mentor2 from '../images/members/mentor2.jpeg';
import mentor3 from '../images/members/mentor3.jpg';
import mentor from '../images/members/mentor.png';
const CE4 = new URL(
  "../images/members/CE4.webp",
  import.meta.url
).href;

const CE3 = new URL(
  "../images/members/CE3.webp",
  import.meta.url
).href;

const CE2 = new URL(
  "../images/members/CE2.webp",
  import.meta.url
).href;

const CE1 = new URL(
  "../images/members/CE1.webp",
  import.meta.url
).href;

const CE11 = new URL(
  "../images/members/CE11.webp",
  import.meta.url
).href;

const SE1 = new URL(
  "../images/members/SE1.webp",
  import.meta.url
).href;

const SE2 = new URL(
  "../images/members/SE2.webp",
  import.meta.url
).href;

const SE3 = new URL(
  "../images/members/SE3.webp",
  import.meta.url
).href;



export const team = [
  // Board Members
  {
    id: 1,
    name: "Aayushma Kafle",
    role: "President",
    image: president,
    bgColor: "bg-yellow-300",
    bio: "Passionate about tech and community building",
    category: "board"
  },
  {
    id: 2,
    name: "Archana Bhattarai",
    role: "Vice-President",
    image: vpresident,
    bgColor: "bg-blue-300",
    bio: "Tech enthusiast and event organizer",
    category: "board"
  },
  {
    id: 3,
    name: "Samrachana Baral",
    role: "Secretary",
    image: secratary,
    bgColor: "bg-gray-700",
    bio: "Detail-oriented and organized",
    category: "board"
  },
  {
    id: 4,
    name: "Jasmine Timilsina",
    role: "Graphic Designer",
    image: graphicdesigner,
    bgColor: "bg-orange-200",
    bio: "Creative designer bringing ideas to life",
    category: "board"
  },
  {
    id: 5,
    name: "Samika Khadka",
    role: "Social Media Manager",
    image: socialmediahandler,
    bgColor: "bg-purple-200",
    bio: "Social media expert and content creator",
    category: "board"
  },
  {
    id:6,
    name: "Sharon Gurung",
    role: "Club Coordinator",
    image: clubcoordinatior,
    bgColor: "bg-purple-200",
    bio: "Club mediator and manager",
    category: "board"
  },

  // Mentors
  {
    id: 7,
    name: "Er. Pratikshya Shrestha",
    role: "Club Advisor",
    image: mentor2,
    bgColor: "bg-green-200",
    bio: "Guiding and supporting GirlsTech initiatives",
    category: "mentor"
  },
  {
    id: 8,
    name: "Er. Prativa Nyaupane",
    role: "Club Advisor",
    image: mentor3,
    bgColor: "bg-green-200",
    bio: "Guiding and supporting GirlsTech initiatives",
    category: "mentor"
  },
  {
    id: 9,
    name: "Ankita Gurung",
    role: "Club Advisor",
    image: mentor,
    bgColor: "bg-green-200",
    bio: "Guiding and supporting GirlsTech initiatives",
    category: "mentor",
    imageClassName: "scale-110"
    
  },

  // Executive Members (add as many as needed)
  {
    id: 10,
    name: "Kanchan Ghatraj",
    role: "Executive Member",
    image: CE4,
    bgColor: "bg-pink-200",
    bio: "Helping organize club events",
    category: "executive"
  },
  {
    id: 11,
    name: "Janvi Pratihast",
    role: "Executive Member",
    image: CE3,
    bgColor: "bg-pink-200",
    bio: "Helping organize club events",
    category: "executive"
  },
  {
    id: 12,
    name: "Aishwarya Dahal",
    role: "Executive Member",
    image: SE3,
    bgColor: "bg-pink-200",
    bio: "Helping organize club events",
    category: "executive"
  },
  {
    id: 13,
    name: "Sudina Bhandari",
    role: "Executive Member",
    image: SE2,
    bgColor: "bg-pink-200",
    bio: "Helping organize club events",
    category: "executive"
  },
  {
    id: 14,
    name: "Kritika Chapagain",
    role: "Executive Member",
    image: CE2,
    bgColor: "bg-pink-200",
    bio: "Helping organize club events",
    category: "executive"
  },
  {
    id: 15,
    name: "Santoshi Dhakal",
    role: "Executive Member",
    image: CE1,
    bgColor: "bg-pink-200",
    bio: "Helping organize club events",
    category: "executive"
  },
  {
    id: 16,
    name: "Samikshya Subedi",
    role: "Executive Member",
    image: CE11,
    bgColor: "bg-pink-200",
    bio: "Helping organize club events",
    category: "executive"
  },
  {
    id: 17,
    name: "Sitishma KC",
    role: "Executive Member",
    image: SE1,
    bgColor: "bg-pink-200",
    bio: "Helping organize club events",
    category: "executive"
  }
];

// Utility Functions
export const getTeamMemberById = (id) =>
  team.find(member => member.id === id);

export const getTeamMembersByRole = (role) =>
  team.filter(member => member.role === role);

export const getTeamMembersByCategory = (category) =>
  team.filter(member => member.category === category);