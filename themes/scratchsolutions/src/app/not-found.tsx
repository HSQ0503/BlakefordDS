import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import Link from "next/link";

const NotFound = async () => {
  return (
    <>
      <SeoMeta title={"Page Not Found"} />
      <section className="pt-50 pb-24 text-center grid-line">
        <div className="container relative z-10">
          <div className="row justify-center">
            <div className="sm:col-10 md:col-8 lg:col-6">
              <div>
                <ImageFallback
                  src="/images/404.png"
                  alt="404 Not Found"
                  width={630}
                  height={320}
                  className="mx-auto"
                />
              </div>
              <h1
                className="h2 mb-4"
                dangerouslySetInnerHTML={markdownify(
                  "**Oops! The page you are** <br/> _looking for doesn't exist_",
                )}
              />

              <Link href="/" className="btn btn-primary mt-8">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
