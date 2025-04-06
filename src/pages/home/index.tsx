import { ExpiredSubscriptions } from "src/components/common/ExpiredSubscriptions";
import { Suggestions } from "src/components/common/suggestions";

const dummyUsers = [
    {
        backgroundImage: "https://via.placeholder.com/400x200",
        avatar: "https://via.placeholder.com/100",
        username: "Kiara",
        handle: "@anishahot",
        isVerified: true,
        status: "Free",
        online: true,
    },
    {
        backgroundImage: "https://via.placeholder.com/400x200",
        avatar: "https://via.placeholder.com/100",
        username: "Kiara",
        handle: "@anishahot",
        isVerified: true,
        status: "Free",
        online: true,
    },
    {
        backgroundImage: "https://via.placeholder.com/400x200",
        avatar: "https://via.placeholder.com/100",
        username: "Kiara",
        handle: "@anishahot",
        isVerified: true,
        status: "Free",
        online: true,
    },
    {
        backgroundImage: "https://via.placeholder.com/400x200",
        avatar: "https://via.placeholder.com/100",
        username: "Kiara",
        handle: "@anishahot",
        isVerified: true,
        status: "Free",
        online: true,
    },
    {
        backgroundImage: "https://via.placeholder.com/400x200",
        avatar: "https://via.placeholder.com/100",
        username: "Kiara",
        handle: "@anishahot",
        isVerified: true,
        status: "Free",
        online: true,
    },
    {
        backgroundImage: "https://via.placeholder.com/400x200",
        avatar: "https://via.placeholder.com/100",
        username: "Kiara",
        handle: "@anishahot",
        isVerified: true,
        status: "Free",
        online: true,
    },
    {
        backgroundImage: "https://via.placeholder.com/400x200",
        avatar: "https://via.placeholder.com/100",
        username: "Kiara",
        handle: "@anishahot",
        isVerified: true,
        status: "Free",
        online: true,
    },
    {
        backgroundImage: "https://via.placeholder.com/400x200",
        avatar: "https://via.placeholder.com/100",
        username: "Kiara",
        handle: "@anishahot",
        isVerified: true,
        status: "Free",
        online: true,
    },
    // Add more users here...
];

const Home = () => {
    return (
        <>
            <div className="block lg:hidden mb-4 space-y-4">
                <Suggestions users={dummyUsers} />
                <Suggestions users={dummyUsers} />
            </div>

            {/* Feed */}
            <div className="space-y-6">
                {/* Your posts will go here */}
                <div className="bg-white p-4 rounded shadow">Post 1</div>
                <div className="bg-white p-4 rounded shadow">Post 2</div>
            </div>

            {/* Desktop View: Sidebar */}
            <div className="hidden lg:block fixed right-4 top-20 w-72 space-y-4">
                <Suggestions users={dummyUsers} />
                <Suggestions users={dummyUsers} />
            </div>
        </>
    );
};

export default Home;
