// const Header = () => {
//   const styles = {
//     backgroundImage: `linear-gradient(rgba(12, 44, 56,0),rgb(12, 44, 56)),url(${
//       images.image
//     })`,
//     padding: 20,
//     border: 'none',
//     textAlign: 'center',
//     height: 280,
//     backgroundSize: 'cover',
//   };
//   const navBarStyle = {
//     height: 40,
//   };
//   const buttonStyle1 = {
//     border: '2px solid #f19400',
//     backgroundColor: 'transparent',
//     borderRadius: 20,
//     width: 90,
//     float: 'right',
//     padding: '5px 0',
//     color: '#f19400',
//     marginRight: 20,
//     cursor: 'pointer',
//   };
//   const buttonStyle2 = {
//     border: 'none',
//     width: 90,
//     padding: '6px 0',
//     float: 'right',
//     backgroundColor: '#f19400',
//     borderRadius: 20,
//     color: '#fff',
//     cursor: 'pointer',
//   };
//   if (authService.isSignedIn()) {
//     return (
//       <div style={styles}>
//         <div style={navBarStyle}>
//           <Link href="/clash" prefetch>
//             <button style={buttonStyle1}>Clash</button>
//           </Link>
//         </div>
//         <img
//           style={{ marginBottom: '-40px', marginTop: '30px' }}
//           src={images.clash}
//           alt="close"
//         />
//         <img src={images.flatPhone} alt="close" />
//       </div>
//     );
//   } else {
//     return (
//       <div style={styles}>
//         <div style={navBarStyle}>
//           <Link href="/signup" prefetch>
//             <button style={buttonStyle2}>Register</button>
//           </Link>
//           <Link href="/signin" prefetch>
//             <button style={buttonStyle1}>Sign in</button>
//           </Link>
//         </div>
//         <img
//           style={{ marginBottom: '-40px', marginTop: '30px' }}
//           src={images.clash}
//           alt="close"
//         />
//         <img src={images.flatPhone} alt="close" />
//       </div>
//     );
//   }
// };

// const Clash = () => {
//   const clashStyles = {
//     padding: 20,
//     height: 'auto',
//   };
//   const clashHeader = {
//     fontSize: 90,
//     marginBottom: 10,
//     fontWeight: 800,
//     color: '#415662',
//   };
//   const clashSmallHeader = {
//     fontSize: 30,
//     color: '#F19400',
//     fontWeight: 700,
//   };
//   const clashParagraph = {
//     fontSize: 14,
//     lineHeight: '1.7em',
//     color: '#C5CACC',
//   };
//   return (
//     <div style={{ height: 'auto' }}>
//       <div style={clashStyles}>
//         <h1 style={clashHeader}>01</h1>
//         <h3 style={clashSmallHeader}>Clash</h3>
//         <p style={clashParagraph}>
//           On clash, a punter gets his betting slip, picks his game choosing the
//           odds and challenges the other punter; the slip with the best odds
//           after an agreed set of games wins the day.
//         </p>
//       </div>
//       <div style={{ height: '400px' }}>
//         <img
//           style={{ float: 'right', marginTop: '30px' }}
//           src={images.phone2}
//           alt="close"
//         />
//         <img
//           style={{
//             position: 'absolute',
//             marginTop: '150px',
//             marginLeft: '50px',
//             float: 'right',
//           }}
//           src={images.clashWon}
//           alt="close"
//         />
//       </div>
//     </div>
//   );
// };

// const TopPunter = () => {
//   const clashStyles = {
//     padding: 20,
//     height: 'auto',
//   };
//   const clashHeader = {
//     fontSize: 90,
//     marginBottom: 10,
//     fontWeight: 800,
//     color: '#415662',
//   };
//   const clashSmallHeader = {
//     fontSize: 30,
//     color: '#F19400',
//     fontWeight: 700,
//   };
//   const clashParagraph = {
//     fontSize: 14,
//     lineHeight: '1.7em',
//     color: '#C5CACC',
//   };
//   return (
//     <div style={{ height: 'auto' }}>
//       <div style={clashStyles}>
//         <h1 style={clashHeader}>02</h1>
//         <h3 style={clashSmallHeader}>Top Punter</h3>
//         <p style={clashParagraph}>
//           Winning should come with bragging rights, so we make your experience
//           more fun with a ranking system based on your activity and winning
//           track record on PunterClash
//         </p>
//         <p style={clashParagraph}>
//           A badge of honour on your skills in your local area and the global
//           stage
//         </p>

//         <div
//           style={{
//             height: '30px',
//             border: '1px solid #F19400',
//             borderRadius: '5px',
//             marginTop: '50px',
//             marginBottom: '-20px',
//           }}
//         >
//           <div
//             style={{
//               float: 'left',
//               width: '50%',
//               backgroundColor: '#F19400',
//               textAlign: 'center',
//               padding: '7px 0',
//               fontSize: '14px',
//             }}
//           >
//             Global
//           </div>
//           <div
//             style={{
//               float: 'left',
//               width: '50%',
//               textAlign: 'center',
//               padding: '7px 0',
//               fontSize: '14px',
//             }}
//           >
//             Local
//           </div>
//         </div>
//       </div>

//       <div>
//         <img
//           style={{ marginBottom: '-85px' }}
//           src={images.leaderBoard}
//           alt="close"
//         />
//         <img
//           style={{ marginBottom: '-85px' }}
//           src={images.leaderBoard2}
//           alt="close"
//         />
//         <img
//           style={{ marginBottom: '-85px' }}
//           src={images.leaderBoard3}
//           alt="close"
//         />
//         <img src={images.leaderBoard4} alt="close" />
//       </div>
//     </div>
//   );
// };

// const SocialCommunity = () => {
//   const clashStyles = {
//     padding: 20,
//     height: 'auto',
//   };
//   const clashHeader = {
//     fontSize: 90,
//     marginBottom: 10,
//     fontWeight: 800,
//     color: '#415662',
//   };
//   const clashSmallHeader = {
//     fontSize: 30,
//     color: '#F19400',
//     fontWeight: 700,
//   };
//   const clashParagraph = {
//     fontSize: 14,
//     lineHeight: '1.7em',
//     color: '#C5CACC',
//   };
//   return (
//     <div style={{ height: 'auto' }}>
//       <div style={clashStyles}>
//         <h1 style={clashHeader}>03</h1>
//         <h3 style={clashSmallHeader}>Social Community</h3>
//         <p style={clashParagraph}>
//           What is better than two punters challenging each other? A community of
//           other players to show off your talent and discuss the latest sports
//           news and results. Follow the post of your friends, share your photos
//           and videos directly and interact with.
//         </p>
//       </div>
//       <div
//         style={{
//           backgroundImage: `url(${images.rings})`,
//           height: '370px',
//           backgroundSize: 'cover',
//           textAlign: 'center',
//           marginTop: '80px',
//         }}
//       >
//         <img style={{ marginTop: '-50px' }} src={images.phone3} alt="Phone" />
//       </div>
//     </div>
//   );
// };

// <Layout>
//   <div className="app">
//     <Header />
//     <div className="main-body">
//       <div className="caption">
//         <h1>
//           Winner Takes
//           <span>All!</span>
//         </h1>
//         <p>
//           You do not need to worry about loosing your money to bookies
//           when you can win by challenging other punters in the game of
//           Odds
//         </p>
//       </div>
//       <div className="phoneRing">
//         <img
//           style={{ marginTop: '110px', paddingLeft: '50px' }}
//           className="caption1"
//           src={images.coin}
//           alt="close"
//         />
//         <img className="caption2" src={images.phone} alt="close" />
//         <img
//           style={{ marginTop: '230px', paddingRight: '50px' }}
//           className="caption3"
//           src={images.asset1Copy}
//           alt="close"
//         />
//       </div>
//     </div>
//     <Clash />
//     <TopPunter />
//     <SocialCommunity />
//     <div className="frequentQuestion">
//       <h1 style={{ fontSize: '35px', fontWeight: '800' }}>
//         Frequently Asked Questions
//       </h1>
//       <div className="question">
//         <h3>How does punterclash work?</h3>
//         <p>
//           We give you the opportunity to control your odds of winning. You
//           register to start playing, pick your slip, populate it with
//           games and your chosen odds and stake it against the odds of
//           other players on punterclash. The punter with the highest odds
//           at the end of a game, wins.
//         </p>
//       </div>

//       <div className="question">
//         <h3>What is better than two punters challenging each other?</h3>
//         <p>
//           A community of other players to show off your talent and discuss
//           the latest sport news and results. Follow the posts of your
//           friends, share your photos and videos directly and interact with
//           different players around the world.
//         </p>
//       </div>

//       <div className="question last">
//         <h3>How do we cash out?</h3>
//         <p>
//           At the end of a clash we select the user with the highest odds.
//           And that user gets credited 90% of the total amount placed on a
//           clash into their wallets!
//         </p>
//       </div>
//     </div>
//   </div>
//   <div className="links">
//     <ul>
//       <li>About Us</li>
//       <li>Contact Us</li>
//       <li>Terms</li>
//       <li>Privacy Policy</li>
//       <li>Careers</li>
//     </ul>
//   </div>
//   <div className="footer">
//     <img
//       style={{ marginBottom: '40px' }}
//       src={images.punterPrimaryLogo}
//     />
//     <br />
//     <img
//       style={{ height: '20px', width: '20px' }}
//       src={images.twitterLogoSilhouette}
//     />
//     <img
//       style={{ height: '20px', width: '20px', marginLeft: '15px' }}
//       src={images.facebookLogo}
//     />
//     <img
//       style={{ height: '20px', width: '20px', marginLeft: '15px' }}
//       src={images.instagramLogo}
//     />
//   </div>
//   <style jsx {...props}>
//     {GlobalStyle}
//   </style>
// </Layout>
