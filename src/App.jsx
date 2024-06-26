import './App.css';
import { useState } from "react";
const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);


  // const handleAddFighter = (fighter) => {
    
  //   setTeam(team => {
  //     if(money > fighter.price) {
  //     const addTeam =[...team, fighter];
  //     console.log("Button clicked! Current team:", addTeam);
  //     const price = money - fighter.price;
  //     console.log("price", price);
  //     setMoney(price)
  //   return addTeam
  //   } else {
  //     console.log("No money")
  //   }
  // } )
  // }
  

  const handleAddFighter = (fighter) => {
    setTeam(team => {
      const addTeam = [...team, fighter];
      console.log("Button!", addTeam)
      return addTeam
    });

    if( money > fighter.price) {
      const price = money - fighter.price;
      console.log("price", price);
      setMoney(price);
    } else {
      console.log("No money")
    }
  };

  const handleRemoveFighter = (fighter) => {
   let teamMember = team.filter((member) => {
       const newTeam = member !== fighter;
       
       return newTeam
      
      
   });
   if(teamMember) {
    const refund = fighter.price + money;
    // return refund
    
    setMoney(refund)
   }
   setTeam(teamMember);
   
  }
  
const totalStrength = function() {
   return team.reduce(function(total, fighter) {
    return total + fighter.strength
   },0);
};

const totalAgility = () => {
  return team.reduce((init, fighter) => {
    return init + fighter.agility
  }, 0)
}
  return (
    <>
    <h1>Zombie Fighters</h1>
    <div className="size">
 <div>
  Money: {money}
 </div>
 <div>
 Total Strength: {totalStrength() }
 </div>
 <div>
  Total Agility: {totalAgility()}
 </div>
 <div className='move'>
  Team 
   <p> {team.length === 0 ? "Pick some team memners!": "" } </p>
 </div>
 </div>
     <ul>
      {zombieFighters.map((eachZombie, index) => (
        < li key={index}>
          <img src={eachZombie.img} alt= {eachZombie.name} />
          <div className='padding'>
          <div >{eachZombie.name}</div>
          <div>Price: {eachZombie.price}</div>
          <div>Strength: {eachZombie.strength}</div>
          <div>Agility: {eachZombie.agility}</div>
          </div>
          <button onClick={() =>handleAddFighter(eachZombie)}>Add</button>
          </li>
         
      ))}
     </ul>
     <ul>
      {team.map((eachMember, index) => (
        <li key={index}>
            <img src={eachMember.img} alt= {eachMember.name} />
            <div className='padding'>
          <div>{eachMember.name}</div>
          <div>Price: {eachMember.price}</div>
          <div>Strength: {eachMember.strength}</div>
          <div>Agility: {eachMember.agility}</div>
          </div>
          <button onClick={()=>handleRemoveFighter(eachMember)}>Remove
          </button>
        </li>
      ))}
     </ul>
    </>
   
  );
}

export default App