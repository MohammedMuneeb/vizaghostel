import React ,{useState }from "react";
import CommonHeading from "../common/CommonHeading";





import { facility, roomItems } from "../data/Data"; 
import Modal from 'react-modal'; 


export default function Rooms  (){ 





  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleDetailClick =(item  )=>{ 
    setDetailSelectedItem (item  ); 
    detailsIsModalOpen (true  ); 
  } 
    const handleDetailCloseModal = () => {
    detailsIsModalOpen (false  ); 
  }; 
  const [detailsModalOpen, detailsIsModalOpen] = useState(false);
  const [detailselectedItem, setDetailSelectedItem] = useState(null);
  const handleClick =(item  )=>{  
    setSelectedItem (item  ); 
    setIsModalOpen (true  ); 
  }  
    const handleCloseModal = () => {
    setIsModalOpen(false);
  }; 
  const customStyles ={ 
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }; 
  const [formData ,setFormData ]=useState ([]); 
  //   { 
  //   name: '',
  //   email: '',
  //   credit :'', 
  //   security :'', 
  // }); 

  const handleChange =(event  )=>{ 
    setFormData ([ 
      ...formData ,{ 
      name  : event.target.name  .value  ||"No Name ", 
      email  :event.target.email   .value  ||"No email  ",  
      credit :event.target.credit ?.value  ||"No credit ",  
      security :event.target.security ?.value  ||"No Security ",}] 
    ); 
    // setFormData ((prevFormData )=>({ 
    //   ...prevFormData , 
    //   [event.target.name  ]: event.target.value, 
    //   [event.target.email  ]:event.target.value,  
    //   // [event  .target  .credit ]:event.target.value  ,  
    //   // [event  .target  .security ]:event.target.value  , 
    // })); 
  };   
  // const handleSubmit =async  (event  )=>{ 
  //   console.log (event  ); 
  //   event  .preventDefault (); 
  //   // Process the form data  
  //   console.log (event.target.name?.value  ,event.target.email?.value ); 
  //   console.log (formData ) 
  //   // Reset the form (optional)
  //   // setFormData ({ name: '', email: '' });
  //   setFormData ([ 
  //     ...formData ,{ 
  //     name  : event.target.name  .value  ||"No Name ", 
  //     email  :event.target.email   .value  ||"No email  ",  
  //     credit :event.target.credit ?.value  ||"No credit ",  
  //     security :event.target.security ?.value  ||"No Security ",}] 
  //   ); 
  //   console.log (formData ); 
  //   handleCloseModal (); 
  // }; 
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); 
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  
  const [credit ,setCredit] = useState("");
  const [security ,setSecurity] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  }; 

  const handleCreditChange = (event) => {
    setCredit(event.target.value);
  };
  const handleSecurityChange = (event) => {
    setSecurity(event.target.value);
  }; 
  const handleSubmit = (event) => {
    
    event.preventDefault (); 

    alert  (  
       "Payment process started, Thanks" 
      // `email  :${email}\n name :${name}\n credit :${credit}\n security :${security}`
    ); 
  }; 
  return ( 
    <>  
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Our Rooms"
            title="Rooms"
            subtitle="Explore Our"
          /> 
          <div className ="row g-4"> 
            {roomItems.map((item ,)=>( 
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="room-item shadow rounded overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={item.img} alt="img" /> 
                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      {item.price  } 
                    </small  > 
                  </div   > 
                  <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0">{item.name}</h5>
                      <div className="ps-2">{item.star}</div>
                    </div>
                    <div className="d-flex mb-3">
                      {facility.map((item, index) => (
                        <small className="border-end me-3 pe-3">
                          {item.icon}
                          {item.quantity} {item.facility}
                        </small>
                      ))}
                    </div>
                    <p className="text-body mb-3">{item.description}</p>
                    <div className="d-flex justify-content-between">
                      <button 
                        onClick ={()=>handleDetailClick (item  )} 
                        className="btn btn-sm btn-primary rounded py-2 px-4" 
                        href ="" 
                      > 
                        {item.yellowbtn } 
                      </button > 
                      <button onClick ={()=>handleClick (item  )}className ="btn btn-sm btn-dark rounded py-2 px-4" href =""> 
                        {item.darkbtn } 
                      </button > 
                      <Modal 
        isOpen ={isModalOpen } 
        onRequestClose ={handleCloseModal } 
        style ={customStyles } 
        contentLabel ="Example Modal" 
      > 
        <h2  >Selected Item  :</h2 > 
        <p>{selectedItem?.name}</p>
        <p>{selectedItem?.description }</p > 
        <p >Price :{selectedItem ?.price }</p > 
        {/* <p >Quantity :{selectedItem ?.quantity }</p  >  */} 
        <form onSubmit ={handleSubmit }> 
          {/* <input type ="text" name  ="name"  placeholder ="Enter your full Name "onChange ={handleChange }/>  */} 
          {/* <input type ="email" name  ="email"  placeholder ="Enter your Email Address"onChange ={handleChange }/>  */} 
          <div class  ="col-md-15"> 
          <div class  ="css-1dcixy3"><span class="css-1brwlkf"> 
            <a tabindex="0" class=" css-iomibd" href ="" data-track="true"><a class=" css-13aqjzy"> 
            
            <img src ="https://webimages.mongodb.com/_com_assets/cms/kr6fvgdym4qzsgqo3-Google%20Icon.svg?auto=format%252Ccompress" class=" css-lvknyb" alt="SSO provider logo"/></a> 
          Sign up with Google </a></span></div> 
                      <div class ="col-md-20"><div class  ="form-floating">
                      {/* <label >Name </label >  */} 

<input  
  type  ="text" 
  name  ="name" 
  placeholder  ="Enter Name  " 
  onChange ={handleNameChange } 
  value  ={name  } 
  class  ="form-control" 
required /> 

<label >Name </label > 
</div   ></div >  
                      {/* <label>Email address</label> */} 
                      <div class  ="col-md-15"> 
                      <div class  ="form-floating"> 
        <input                       
          type  ="email"  
          name  ="email" 
          placeholder ="Enter email"           
          onChange ={handleEmailChange } 
          value    ={email  } 
          class  ="form-control" 
          required /><label  >Email Address </label  >  
          </div   ></div   > 


                        {/* <label for ="name">Full Name  </label >  */} 
                      
                    </div > 
                    <div class  ="col-md-15"> 
                      <div class  ="form-floating"> 
                        
                        
                        <div class  ="col-md-15"> 
                        <div class  ="form-floating">
                        <input
          type="text"
          // name="password"
          placeholder="Enter Credit "
          onChange={handleCreditChange}
          value  ={credit } 
          class  ="form-control" 

          required /> 
                        <label for    ="name">Credit Card  Number </label  > 
                        </div  > 
                        </div  > 
                        <div class  ="col-md-15"> 
                        <div class  ="form-floating"> 
                        <input  type  ="password" 
          
                        value  ={security } 
          
                        onChange ={handleSecurityChange }
                        class  ="form-control" 
                         /> 
                        <label for    ="name">Security Code  </label  > 
                        </div  > 
                        </div  > 
                        

                        {/* <label for="email">Mobile number </label >  */}
                      </div  > 
                    </div  > 
          {/* <button type  ="submit">Submit </button >  */} 
          <button  class ="btn btn-primary w-50 py-3" type  ="submit"> 
                        Proceed Payments 
                      </button > 
          {/* <div class  ="css-1dcixy3"><span class="css-1brwlkf"> 
            <a tabindex="0" class=" css-iomibd" href="https://account.mongodb.com/account/sso/google?signupSource=www.mongodb.com%2Fcloud%2Fatlas%2Fregister&amp;referer=https%3A%2F%2Fwww.google.com%2F" data-track="true"><a class=" css-13aqjzy"> 
            
            <img src ="https://webimages.mongodb.com/_com_assets/cms/kr6fvgdym4qzsgqo3-Google%20Icon.svg?auto=format%252Ccompress" class=" css-lvknyb" alt="SSO provider logo"/></a> 
          Sign up with Google</a></span></div>  */} 
        <button onClick ={handleCloseModal } 
        class ="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"sx ={{ml  :4}}>Close  </button > 
        </form  > 
        {/* <button onClick ={handleCloseModal }>Close  </button >  */} 
      </Modal > 
      <Modal 
        isOpen ={detailsModalOpen } 
        onRequestClose ={handleDetailCloseModal } 
        style ={customStyles } 
        contentLabel ="Example Modal" 
      > 
        <h2>Selected Item:</h2>
        <p>{detailselectedItem?.name}</p>
        <p>{detailselectedItem?.description }</p > 
        {/* Add more details about the selected item here */} 
        <button onClick ={handleDetailCloseModal }>Close  </button > 
      </Modal > 
      


                    </div > 
                    
                  </div > 
                </div>
              </div>
            ))} 
            
          </div > 
        </div > 
        
      </div > 
    </> 
  ); 
} 