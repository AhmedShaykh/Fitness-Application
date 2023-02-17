import { FC, useState, useEffect } from 'react';
import Navbar from '@/Components/Navbar';
import Home from '@/Components/Home';
import Footer from './Components/Footer';
import { SelectedPage } from '@/Shared/Types';

const App: FC = () => {

    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    );

    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="app bg-gray-20">
            <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Home setSelectedPage={setSelectedPage} />
            {/* <Benefits setSelectedPage={setSelectedPage} /> */}
            {/* <OurClasses setSelectedPage={setSelectedPage} /> */}
            {/* <ContactUs setSelectedPage={setSelectedPage} /> */}
            <Footer />
        </div>
    )
};

export default App;