
import ExpertsHero from "@/components/Experts/ExpertsHero"
import ExpertList from "@/components/Experts/ExpertList"
import ExpertBlogs from "@/components/Experts/ExpertBlog"
import Blogs from "@/components/global/Blogs"
import JoinTeamBanner from "@/components/global/JoinTeamBanner"

export default function Experts(){
    return(
        <div className="mx-auto pb-40">
            <ExpertsHero />
            <ExpertList />
            {/* <ExpertBlogs /> */}
            <Blogs />
            <JoinTeamBanner />
        </div>
    )
}