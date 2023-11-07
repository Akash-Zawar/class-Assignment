import { useState } from 'react';
import styles from "./myStyle.module.css";

const MyForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [isChecked1, setIsChecked1] = useState("");
  const [isChecked2, setIsChecked2] = useState("");
  const [selectActivity, setSelectActivity] = useState('');
  const [selectDiabeticChoice,setSelectDiabeticChoice] = useState("");


  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Option:', selectedOption);
  };

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  }
  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  }

  const handleSelectActivity = (e) =>{
    setSelectActivity(e.target.value);
  }
  const handleDiabeticChoice = (e) =>{
    setSelectDiabeticChoice(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.mainSec} >
      <div>
        <span>Your Gender: </span>
        <label>
          <input
            type="radio"
            value="male"
            checked={selectedOption === 'male'}
            onChange={handleOptionChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="female"
            checked={selectedOption === 'female'}
            onChange={handleOptionChange}
          />
          Female
        </label>
      </div>
      <div>
        <label>Height & Weight: </label>
        <input type="text" value={height} placeholder='enter height' onChange={handleHeightChange} /> in cm 
        <input type="text" value={weight} placeholder='enter weight' onChange={handleWeightChange} /> in kg
      </div>
      <div className={styles.alignProperly}>
        <p>Family History</p>
        <div className={styles.alignItems}>
        <span>Anyone in your family have prediabetes?</span>
        <div className={styles.alignProperly1}>
        <input type="checkbox" checked={isChecked1} onChange={handleCheckboxChange1} />Parents
        <input type="checkbox" checked={isChecked2} onChange={handleCheckboxChange2} />Siblings
        </div>
        
        </div>
         

      </div>
      <div className={styles.alignProperly}>
        <p>Activity Level</p>
        <div className={styles.alignItems}>
        <span>How active are you on weekly basis?</span>
        <div className={styles.alignProperly1}>
        <label>
          <input
            type="radio"
            value="Not Very Active"
            checked={selectActivity === 'Not Very Active'}
            onChange={handleSelectActivity}
          />
          Not Very Active
        </label>
        <label>
          <input
            type="radio"
            value="Active"
            checked={selectActivity === 'Active'}
            onChange={handleSelectActivity}
          />
          Active
        </label>
        </div>
        
        </div>
        
      </div>
      <div className={styles.alignProperly}>
      <p>Diabeties</p>
      <div className={styles.alignItems}>
      <span>Have you been diagonised with diabeties before?</span>
      <div className={styles.alignProperly1}>
      <label>
          <input
            type="radio"
            value="Pre-Diabeties"
            checked={selectDiabeticChoice === 'Pre-Diabeties'}
            onChange={handleDiabeticChoice}
          />
          Pre-Diabeties
        </label>
        <label>
          <input
            type="radio"
            value="Type-2"
            checked={selectDiabeticChoice === 'Type-2'}
            onChange={handleDiabeticChoice}
          />
          Type-2
        </label>
        <label>
          <input
            type="radio"
            value="Neither"
            checked={selectDiabeticChoice === 'Neither'}
            onChange={handleDiabeticChoice}
          />
          Neither
        </label>
      </div>
      
      </div>
        
      </div>
      <div><button type="submit" className={styles.subButton}>Submit</button></div>
      
      <div>
        <p>Selected Gender: {selectedOption}</p>
        <p>Height: {height} cm & Weight: {weight} kg</p>
        <p>Anyone in your family have prediabetes? : {isChecked1?"Parents":""} and {isChecked2?"siblings":""}</p>
        <p>How active are you on weekly basis? {selectActivity}</p>
        <p>Have you been diagonised with diabeties before?: {selectDiabeticChoice}</p>
      </div>
    </form>
    
  );
};

export default MyForm;
