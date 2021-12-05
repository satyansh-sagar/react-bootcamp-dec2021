import FormGroup from "./Bootstrap/FormGroup";

const Form = ({FormData, onChange}) => {
    const Desc = {
      Fullname: ["text","Full Name", "This is your full name"],  
      Firstname: ["text","First Name","Please enter your First name or given name"],
      Lastname: ["text","Last Name", "Please enter your last name"],
      Thumbnail: ["text","Your Photo","Upload a picture in CDN e.g. IMGUR"],
      URL: ["text","website Link","Url where the page is going to be hosted"],
      Description: ["text","About you","Write something nice about you"],
      keywords: ["text","keywords","keywords to serach you"], 
      Address: ["text","Where are you?","type in your address"],
      Phone: ["text","Phone Number","please enter your phone number"],
      Email: ["email","Email Address","Tell us your primary email"]
    };
    return (
        <div className="Form">
            {Object.keys(FormData).map(
                fd => <FormGroup 
                key={fd} 
                Label={Desc[fd][1]}
                Type={Desc[fd][0]}
                Desc={Desc[fd][2]}
                onChange={onChange}
                ></FormGroup> 
                )}
        </div>
    )
}

export default Form;
