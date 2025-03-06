import styles from "./styles.module.css";
import Lottie  from 'lottie-react'
// import "./index.css"
// import ani1 from "../pages/ani1.json"
import home2 from "../pages/home2.json"
// import home1 from "../pages/home1.json"
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>DRUGSeek</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<div className="main-card">
			   <div className="ani-con"><Lottie animationData={home2} className='main-animations'/></div>
			</div>
		</div>
	);
};

export default Main;
