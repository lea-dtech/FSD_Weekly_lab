import React from 'react'

function Profilecard() {
    const profiles = [
        {
            id: 1,
            name: "Vikram Kumar",
            role: "Full Stack Developer",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
            skills: ["React", "Tailwind", "JavaScript","Python"]
        },

        {
        id: 2,
        name: "Harish Verma",
        role: "UI/UX Designer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        skills: ["Figma", "Adobe XD", "Photoshop"]
        },

        {
        id: 3,
        name: "Rahul Sharma",
        role: "Backend Developer",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        skills: ["Node.js", "MongoDB", "Express"]
        }
    ];

    return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profiles.map(profile => (
                <div key={profile.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden w-80 hover:scale-105 transition duration-300">
                <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-64 object-cover"
                />
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
                    <p className="text-blue-600 mt-2 font-medium">{profile.role}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                    {profile.skills.map((skill, index) => (
                        <span key={index}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {skill}
                        </span>
                    ))}
                    </div>

                    <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                    View Profile
                    </button>
                </div>
            </div>
            ))}
        </div>
    </div>
    )
}
export default Profilecard