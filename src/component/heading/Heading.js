import './Heading.css';

const Heading = () => {
    const nowDate = new Date();
    const day = nowDate.getDate();
    const month = nowDate.getMonth() + 1;
    const year = nowDate.getFullYear();
    
    const checkDay = day < 10 ? `0${day}` : day;
    const checkMonth = month < 10 ? `0${month}` : month;

    const now = `${checkDay}.${checkMonth}.${year}г.`; 



    return (
        <div className="heading">
            <h1 className="heading_text">Курс валют на {now}</h1>
        </div>
        
    )
}

export default Heading;