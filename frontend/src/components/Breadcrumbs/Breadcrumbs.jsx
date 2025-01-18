import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Breadcrumbs/Breadcrumbs.css';

const Breadcrumbs = () => {
    const location = useLocation();
    const [breadcrumbs, setBreadcrumbs] = useState([]);
  
    useEffect(() => {
      const pathnames = location.pathname.split('/').filter(x => x);
  
      if (pathnames.length) {
        const newBreadcrumb = pathnames[pathnames.length - 1];
        // Перевіряємо, чи такий шлях уже є в breadcrumbs
        if (!breadcrumbs.includes(newBreadcrumb)) {
          setBreadcrumbs(prev => [...prev, newBreadcrumb]);
        }
      } else {
        // Якщо на головній сторінці, очищуємо breadcrumbs
        setBreadcrumbs([]);
      }
    }, [location.pathname]);
  
    const handleBreadcrumbClick = (index) => {
      setBreadcrumbs(prev => prev.slice(0, index + 1));
    };
  
    return (
      <section className="nav">
        <div className="nav_container">
          <div className="nav_links">
            {/* Головна */}
            <Link to="/" onClick={() => setBreadcrumbs([])}>
              <p>Головна</p>
            </Link>
            {breadcrumbs.map((name, index) => {
              const routeTo = `/${breadcrumbs.slice(0, index + 1).join('/')}`;
  
              return (
                <li key={name}>
                  <span>/</span>
                  <Link
                    to={routeTo}
                    onClick={() => handleBreadcrumbClick(index)}
                  >
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </Link>
                </li>
              );
            })}
          </div>
        </div>
      </section>
    );
};

export default Breadcrumbs;


// import '../Navigation/Navigation.css';

// import { Link } from 'react-router-dom';

// const Navigation = () => {
//     return (
//         <section className="nav">
//             <div className="nav_container">
//                 <div className="nav_links">
//                     <Link to="/">
//                         <p>Головна</p>
//                     </Link>
//                     <Link to="/">
//                         <p>Електронний журнал</p>
//                     </Link>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Navigation;