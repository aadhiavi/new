import React from 'react';
import { Route, Routes, useLocation, NavLink } from 'react-router-dom';
import SubRoute from '../SubPages/SubRoute';
import './MainRoute.css';
import Hyderabad from './Components/Hyderabad';
import Guntur from './Components/Guntur';
import Bangalore from './Components/Bangalore';

const headings = ['Stay', 'Dine', 'Wedding-Hall'];

function MainRoute({ route }) {
    const location = useLocation();

    const mainRouteName = {
        'hyderabad': 'Welcome to Hyderabad',
        'guntur': 'Welcome to Guntur',
        'bangalore': 'Welcome to Bangalore'
    }[route];
    
    const isSubRoute = headings.some(heading => location.pathname.endsWith(heading));

    return (
        <div className=''>
            <nav className='SubNav'>
                <ul>
                    {headings.map(heading => (
                        <li key={heading}>
                            <NavLink to={`/${route}/${heading}`}>{heading}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className='mini-heading'>
                <h1 className='heading-main'>{mainRouteName}</h1>
                {!isSubRoute && (
                    <>
                        {route === 'hyderabad' && <Hyderabad />}
                        {route === 'guntur' && <Guntur />}
                        {route === 'bangalore' && <Bangalore />}
                    </>
                )}
                <Routes>
                    {headings.map(heading => (
                        <Route
                            key={heading}
                            path={heading}
                            element={<SubRoute route={route} heading={heading} />}
                        />
                    ))}
                </Routes>
            </div>
        </div>
    );
}

export default MainRoute;


// import React from 'react';
// import { Route, Routes, Link, useLocation } from 'react-router-dom';
// import SubRoute from '../SubPages/SubRoute';
// import './MainRoute.css';
// import Hyderabad from './Components/Hyderabad';

// const headings = ['Stay', 'Dine', 'Wedding-Hall'];

// function MainRoute({ route }) {
//     const location = useLocation();

//     const mainRouteName = {
//         'hyderabad': 'Welcome to Hyderabad',
//         'guntur': 'Welcome to Guntur',
//         'bangalore': 'Welcome to Bangalore'
//     }[route];

//     // Check if the current path is a sub-route
//     const isSubRoute = headings.some(heading => location.pathname.endsWith(heading));

//     return (
//         <div className=''>
//             <nav className='SubNav'>
//                 <ul>
//                     {headings.map(heading => (
//                         <li key={heading}><Link to={`${heading}`}>{heading}</Link></li>
//                     ))}
//                 </ul>
//             </nav>
//             <div className='mini-heading'>
//                 <h1 className='heading-main'>{mainRouteName}</h1>
//                 {route === 'hyderabad' && !isSubRoute && <Hyderabad />}
//                 <Routes>
//                     {headings.map(heading => (
//                         <Route
//                             key={heading}
//                             path={heading}
//                             element={<SubRoute route={route} heading={heading} />}
//                         />
//                     ))}
//                 </Routes>
//             </div>
//         </div>
//     );
// }

// export default MainRoute;