import React,{useState} from 'react'
import CreateForm from '../SubjectComponents/CreateForm';
import GetById from '../SubjectComponents/GetById';
import GetAll from '../SubjectComponents/GetAll';


const Subject = () => {
  const [getAll, setGetAll] = useState(false);
  const [createForm, setCreateForm] = useState(false);
  const [getAllById, setGetAllById] = useState(false);

  const handleDisplayGetAll = () => {
    setGetAll(true);

    setCreateForm(false);
    setGetAllById(false);
  };

  const handleDisplayCreateForm = () => {
    setCreateForm(true);

    setGetAll(false);
    setGetAllById(false);
  };

  const handleDisplayGetAllById = () => {
    setGetAllById(true);

    setGetAll(false);
    setCreateForm(false);
  };

  return (
    <div className="container">
      <div className="left">
        <button onClick={handleDisplayGetAll}>Get ALL the Subjects</button>
        <button onClick={handleDisplayGetAllById}>Get One Subject By Id</button>
        <button onClick={handleDisplayCreateForm}>Create a Subject</button>
      </div>
      <div className="right">
        {getAll ? <GetAll /> : ""}
        {createForm ? <CreateForm /> : ""}
        {getAllById ? <GetById /> : ""}
      </div>
    </div>
  );
}

export default Subject
