import { useState } from "react";
import ChatPreview from "src/components/common/chatPreview";
import CustomModal from "src/components/common/customModal";
import ProfileOfferCard from "src/components/common/ProfileOfferCard";
import { Suggestions } from "src/components/common/suggestions";
import UserPromoCard from "src/components/common/UserPromoCard";

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
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        <>
            <div className="mb-4 space-y-4">
                <Suggestions title="Suggestions for you" users={dummyUsers} />
                <Suggestions title="Expired Subscriptions" users={dummyUsers} />
            </div>

            {/* Feed */}
            <div className="space-y-6">
                {/* Your posts will go here */}
                <div className="bg-white p-4 rounded shadow">Post 1</div>
                <div className="bg-white p-4 rounded shadow">Post 2</div>
            </div>
            <UserPromoCard
                profileImg="https://via.placeholder.com/48" // Replace with actual image
                username="Lilly Bloomes"
                handle="lillybloomes"
                isVerified={true}
                promoText="MY FIRST SEX TAPE NOW AVAILABLE! + TWO FREE EXCLUSIVE VIDEO'S WHEN YOU JOIN! 💦"
                offerLink="https://yourpromotionlink.com"
                timestamp="Yesterday"
            />
            <ProfileOfferCard
                bannerImage="https://via.placeholder.com/400x150"
                profileImage="https://via.placeholder.com/48"
                username="Lilly Bloomes"
                handle="lillybloomes"
                isVerified={true}
                status="Available now"
                limitedOfferText="Limited offer - 65% off for 30 days!"
                offerEndDate="Apr 20"
                promoMessage="MY FIRST SEX TAPE NOW AVAILABLE! + TWO FREE EXCLUSIVE VIDEO'S WHEN YOU JOIN! 💦"
                price="$5.25 for 30 days"
                expiryDate="Jul 4, 2024"
                showOfferCard={true}
            />
            <ChatPreview
                profileImage="https://via.placeholder.com/48"
                username="Ana 🍌"
                handle="anabanana"
                messagePreview="me & @xxhayjxxx can't keep …"
                time="8:53 pm"
                isOnline={true}
                isVerified={true}
            />
            <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Open Modal
            </button>

            <CustomModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                width="w-80"
                height="h-[600px]"
                position="top-left"
                showBackdrop={true}
            >
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Jack</h2>
                        <button onClick={() => setIsModalOpen(false)}>
                            ❌
                        </button>
                    </div>
                    <p className="text-sm text-gray-500">@u417589279</p>
                    <div className="my-2 text-sm">14 Fans • 20 Following</div>

                    <ul className="space-y-3 mt-4">
                        <li className="hover:bg-gray-100 px-2 py-1 rounded">
                            👤 My Profile
                        </li>
                        <li className="bg-blue-50 text-blue-600 px-2 py-1 rounded">
                            🖼️ Collections
                        </li>
                        <li className="hover:bg-gray-100 px-2 py-1 rounded">
                            ⚙️ Settings
                        </li>
                        <li className="hover:bg-gray-100 px-2 py-1 rounded">
                            💳 Your Cards{" "}
                            <span className="text-xs text-gray-500">
                                (to subscribe)
                            </span>
                        </li>
                        <li className="hover:bg-gray-100 px-2 py-1 rounded">
                            🏛 Become a creator{" "}
                            <span className="text-xs text-gray-500">
                                (to earn)
                            </span>
                        </li>
                        <li className="hover:bg-gray-100 px-2 py-1 rounded">
                            ❓ Help & Support
                        </li>
                        <li className="hover:bg-gray-100 px-2 py-1 rounded">
                            🌙 Dark Mode
                        </li>
                        <li className="hover:bg-gray-100 px-2 py-1 rounded">
                            🌐 English ⬇️
                        </li>
                        <li className="hover:bg-gray-100 px-2 py-1 rounded text-red-500">
                            🚪 Log Out
                        </li>
                    </ul>
                </div>
            </CustomModal>
        </>
    );
};

export default Home;
