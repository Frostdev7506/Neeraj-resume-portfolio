import React, { useEffect, useState } from "react";
import PdfShare from "../components/PdfShare";
import ClipLoader from "react-spinners/ClipLoader";
import Iframe from "react-iframe";

function ResumeComponent() {
  const [documentstate, setDocumentState] = useState(true);

  let handleIframeLoad = () => {
    setDocumentState(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDocumentState(false);
    }, 5000); // Change document state to false after 5 seconds

    return () => clearTimeout(timer); // This function will be called when the component unmounts
  }, []);

  const override = {
    margin: "0 auto",

    borderColor: "red",
  };
  return (
    <div>
      <section>
        <div className=" bg-white px-2 py-2 sm:py-2 md:py-2 rounded-lg dark:bg-gray-800">
          <div className="flex lg:flex-row md:flex-col sm:flex-col justify-between mb-4 items-center min-h-fit">
            <h2 className="text-3xl text-gray-500 sm:mx-4 lg:py-5  sm:py-2 md:py-2">
              Resume
            </h2>

            <div className="md:mx-4 sm:mx-4">
              <PdfShare
                pdfUrl={
                  "https://raw.githubusercontent.com/Frostdev7506/Auto-resume/build/Neeraj_Butola_Resume.pdf"
                }
              />
            </div>
          </div>

          <div className=" mx-5  lg:h-screen sm:h-screen h-100 ">
            <>
              {documentstate ? (
                <div className="flex mt-8 items-center justify-center h-screen ">
                  <ClipLoader
                    color={"red"}
                    loading={documentstate}
                    size={300}
                    width={"80%"}
                    css={override}
                    height={"500%"}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              ) : (
                <Iframe
                  className=" bg-gray-100 lg:h-screen md:h-screen  "
                  src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://raw.githubusercontent.com/Frostdev7506/Auto-resume/build/Neeraj_Butola_Resume.pdf#toolbar=0&scrollbar=0"
                  // src="https://docs.google.com/viewer?url=https://github.com/Frostdev7506/Auto-resume/raw/build/cv.pdf&embedded=true"
                  frameBorder="0"
                  scrolling="no"
                  onLoad={handleIframeLoad}
                  layout="responsive"
                  width={"100%"}
                  height={"100%"}
                />
              )}
            </>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResumeComponent;
