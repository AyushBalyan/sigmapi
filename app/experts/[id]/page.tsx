import Image from 'next/image';
import Link from 'next/link';
import ExpertProjects from '@/components/Experts/ExpertProjects';
import RelatedExperts from '@/components/Experts/RelatedExperts';
import BecomeExpertBanner from '@/components/global/BecomeExpertBanner';

// This would be replaced by an actual API call in production
async function getExpertById(id: string) {
    // Simulate API call
    // In production: return fetch(`https://your-api.com/experts/${id}`).then(res => res.json())

    return {
        id,
        name: "Dr. Jane Doe Phd. IITK",
        profileImage: "/Experts/expert1.png",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        expertise: "Industry MAT LAB, Python for Business",
        profession: "Data Scientist at ABC Company",
        experience: "15+ Years",
        education: "M.Tech from IIT Kanpur, PhD from Stanford",
        linkedin: "https://linkedin.com/in/jane-doe"
    };
}

// This would also be replaced by an actual API call
async function getExpertProjects(expertId: string) {
    // In production: return fetch(`https://your-api.com/experts/${expertId}/projects`).then(res => res.json())

    return [
        {
            id: "1",
            name: "Project name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.....",
            image: "/Projects/project1.png"
        },
        {
            id: "2",
            name: "Project name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.....",
            image: "/Projects/project2.png"
        }
    ];
}

// This would also be replaced by an actual API call
async function getRelatedExperts(expertId: string) {
    // In production: return fetch(`https://your-api.com/experts/${expertId}/related`).then(res => res.json())

    return [
        { id: "1", image: '/Experts/expert2.png', alt: 'Expert profile 1' },
        { id: "2", image: '/Experts/expert3.png', alt: 'Expert profile 2' },
        { id: "3", image: '/Experts/expert4.png', alt: 'Expert profile 3' },
        { id: "4", image: '/Experts/expert5.png', alt: 'Expert profile 4' },
        { id: "5", image: '/Experts/expert6.png', alt: 'Expert profile 5' }
    ];
}

export default async function ExpertDetailPage({ params }: { params: { id: string } }) {
    const expert = await getExpertById(params.id);
    const projects = await getExpertProjects(params.id);
    const relatedExperts = await getRelatedExperts(params.id);

    return (
        <div className="py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back button */}
            <Link href="/experts" className="inline-block border border-gray-300 rounded-full px-6 py-2 mb-8 text-gray-600 hover:bg-gray-50 transition-colors">
                BACK
            </Link>

            {/* Expert profile section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                {/* Expert image */}
                <div className="rounded-lg overflow-hidden max-w-md">
                    <Image
                        src={expert.profileImage}
                        alt={expert.name}
                        width={500}
                        height={500}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Expert info */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {expert.name}
                    </h1>
                    <p className="text-gray-600 mb-8">
                        {expert.bio}
                    </p>

                    <div className="space-y-4 mb-8">
                        <div className="flex">
                            <span className="font-medium w-28">Expertise in:</span>
                            <span className="text-gray-600">{expert.expertise}</span>
                        </div>
                        <div className="flex">
                            <span className="font-medium w-28">Profession:</span>
                            <span className="text-gray-600">{expert.profession}</span>
                        </div>
                        <div className="flex">
                            <span className="font-medium w-28">Experience:</span>
                            <span className="text-gray-600">{expert.experience}</span>
                        </div>
                        <div className="flex">
                            <span className="font-medium w-28">Education:</span>
                            <span className="text-gray-600">{expert.education}</span>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Link href={expert.linkedin}
                            className="inline-flex h-12 items-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors mr-4">
                            CONNECT WITH EXPERT
                        </Link>
                        <Link href={expert.linkedin}
                            className="inline-flex items-center justify-center p-3 rounded-full transition-colors">
                            <Image
                                src="/linkedin-icon.svg"
                                alt="Linkedin Icon"
                                width={48}
                                height={48}
                                className="mr-2"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Expert projects section */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Expert Projects</h2>
                <ExpertProjects projects={projects} />
            </div>

            {/* Related experts section */}
            <div className='mb-40'>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">People you also Interested</h2>
                <RelatedExperts experts={relatedExperts} />
            </div>

            <div className='mb-40'>
                <BecomeExpertBanner />
            </div>
        </div>
    );
}