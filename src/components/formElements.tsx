import React,{useState, useEffect} from 'react'
import '../App.css';

const FormElements = ({}:any) => {
    const [formData,setFormData] = useState(
        {
          name : '',
          email: '',
          number:'',
          country : '',
          gender : '',
          terms: ''
        }
      );
    
      const [gender , setGender] = useState('');
    
      const handleChange = (e:any) => {
        const {name , value , type, checked} = e.target;
    
        if(type == 'radio'){
          setGender(value);
          return;
        }
    
        if(type == 'checkbox'){
          setFormData((data:any) => ({...data , [name] : checked ? 'true' : 'false'}))
          return;
        }
    
        setFormData((data:any) => ({...data , [name] : value}));
    
      }
    
      const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(formData);
        console.log(gender);
      }
    
      
    return (
      <>
        <form onSubmit={handleSubmit} className='form'>
          <div>
          <label htmlFor="name">name</label>
          <input 
            type="text"
            id='name'
            name='name'
            value={formData.name}
    
            onChange={handleChange}
    
          />
          </div>
          <div>
           <label htmlFor="email">email</label>
          <input 
            type="email"
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
    
          />
          </div>
          <div>
           <label htmlFor="number">number</label>
          <input 
            type="number"
            id='number'
            name='number'
            value={formData.number}
            onChange={handleChange}
    
          />
          </div>
          <div>
          <select name="country" id="country" value={formData.country} onChange={handleChange}>
            <option value="">Select</option>
            <option value="india">india</option>
            <option value="america">america</option>
            <option value="canada">canada</option>
          </select>
          </div>
          <div>
            <label>Gender:</label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                 checked={gender === "male"}
                onChange={handleChange}
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={handleChange}
              /> Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={gender === "other"}
                onChange={handleChange}
              /> Other
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox"
              name='terms'
              value={formData.terms}
              checked={formData.terms == 'true'}
              onChange={handleChange}
              />
              Terms
            </label>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </>
    )
}

export default FormElements;
