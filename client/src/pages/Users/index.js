import Footer from "../../components/Footer/indexs";
import Header from "../../components/Header";
import UsersList from "../../components/UserList";
// import styles from './HomePage.module.scss'

const activUsers = [
  {
    id: 1,
    imgSrc:
      "https://ic.pics.livejournal.com/pereverstal/78513478/101084/101084_800.jpg",
    firstName: "MocJone",
    lastName: "MocDoe",
    isMale: false,
    email: "jone@doe.com",
    password: "12345678",
  },
  {
    id: 2,
    imgSrc:
      "https://ic.pics.livejournal.com/pereverstal/78513478/101084/101084_800.jpg",
    firstName: "Jone",
    lastName: "Doe",
    isMale: false,
    email: "jone@doe.com",
    password: "12345678",
  },
];

function UsersPage() {
  return (
    <>
      <Header />
      <section>
        <h1>Users profile</h1>
        <UsersList users={activUsers} />
      </section>
      <Footer />
    </>
  );
}
export default UsersPage;
