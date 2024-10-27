import ShowNavbarData from "../ShowNavbarData/ShowNavbarData";

const Navbar = () => {

    const routs = [
        {
            "id": 1,
            "name": "Home",
            "url": "/home"
        },
        {
            "id": 2,
            "name": "About",
            "url": "/about"
        },
        {
            "id": 3,
            "name": "Services",
            "url": "/services",
            "submenu": [
                {
                    "id": 31,
                    "name": "Web Development",
                    "url": "/services/web-development"
                },
                {
                    "id": 32,
                    "name": "Mobile Development",
                    "url": "/services/mobile-development"
                },
                {
                    "id": 33,
                    "name": "SEO Services",
                    "url": "/services/seo"
                }
            ]
        },
        {
            "id": 4,
            "name": "Blog",
            "url": "/blog"
        },
        {
            "id": 5,
            "name": "Contact",
            "url": "/contact"
        }
    ];


    return (
        <nav className="md:flex gap-5">
            {
                routs.map(rout => <ShowNavbarData key={rout.id} rout={rout}></ShowNavbarData>)
            }
        </nav>
    );
};

export default Navbar;