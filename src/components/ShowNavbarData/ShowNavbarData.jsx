const ShowNavbarData = ({ rout }) => {
    const { name, url } = rout;
    return (
        <ul className="">
            <li className=""><a href={url}>{name}</a></li>
        </ul>
    );
};

export default ShowNavbarData;