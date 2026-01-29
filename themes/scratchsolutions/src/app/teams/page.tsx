import TeamCard from "@/components/TeamCard";
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";

export type TeamMember = {
  name: string;
  designation: string;
  image: string;
};
export type TeamPageType = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    image?: string;
    draft?: boolean;
    team_list: Array<TeamMember>;
  };
  slug?: string;
  content?: string;
};
const TeamsPage = () => {
  const data: TeamPageType = getListPage("teams/_index.md");
  const { frontmatter } = data;
  const { title, meta_title, description, image } = frontmatter;
  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader data={frontmatter} />

      <section className="section grid-line">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {frontmatter.team_list && frontmatter.team_list.map((member: TeamMember, index) => (
                    <TeamCard key={index} data={member}  />
                ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default TeamsPage;
