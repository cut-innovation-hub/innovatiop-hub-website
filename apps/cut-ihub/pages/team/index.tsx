import GeneralLayout from "@layouts/GeneralLayout";
import prof from "../../public/prof_mtangi.png";
import eng from "../../public/eng_mlambo.png";
import mai_zviko from "../../public/mai_zviko.png";
import ngwenya from "../../public/ngwenya.png";

function Team() {
  const roled_users = [
    {
      picture: eng,
      role: "Technical Services",
      name: "P.Mlambo",
      id: "asjdhgjkasdf",
    },
    {
      picture: mai_zviko,
      role: "Administratiion Office",
      name: "L.Matumba",
      id: "asdfasd343",
    },
    {
      picture: ngwenya,
      role: "Business Development Office",
      name: "Ngwenya",
      id: "asdfasd3a63",
    },
  ];

  return (
    <GeneralLayout>
      <div className="flex flex-col w-full min-h-screen pt-16">
        <div className="max-w-7xl w-full min-h-screen mx-auto items-center grid md:grid-cols-2 grid-cols-1  gap-8">
          <div className="col-span-1 items-center flex h-full w-full content-center justify-center flex-col">
            <div className="lg:h-[500px] lg:w-[500px] md:w-[300px] md:h-[300px] w-96 h-96 rounded-full bg-slate-100 relative overflow-hidden">
              <img src={prof.src} alt="" className="object-cover w-[400px] absolute left-1/2 transform -translate-x-1/2 bottom-0" />
            </div>
          </div>
          <div className="col-span-1  flex flex-col ">
            <div className="flex flex-col bg-orange-200 max-w-xl  space-y-4 md:p-8 p-4 rounded-xl">
              <p className="text-slate-900 font-semibold text-xl">
                Prof. Mtangi PhD(UP), MSc(UP), BSC(MSU)
              </p>
              <p className="text-lg font-semibold text-slate-700">Director</p>
              <p className="text-lg font-semibold text-slate-700">
                Contact Details: 267-22203/5 Ext 5100
              </p>
              <p className="text-lg font-semibold text-slate-700">Profile</p>
              <p className="text-sm text-slate-600">
                Born in Zvishavane, Zimbabwe, Wilbert Mtangi studied at the
                Midlands State University, Zimbabwe, where he obtained a
                Bachelor’s degree (Hons) in Physics in 2005. He continued his
                studies in Physics at the University of Pretoria (UP), where he
                joined the research group of Prof. F. D. Auret (Electronic
                Materials and Thin Films). He obtained his MSc (2010) and PhD in
                2012.
              </p>
              <p className="text-sm text-slate-600">
                {" "}
                Between 2012 and 2013, Mtangi worked as a post-doctoral fellow
                (UP) . In 2014 he then joined the Laboratory of Molecular
                Electronics at the Weizmann Institute of Science, Israel as a
                postdoctoral fellow. By studying the application of spintronics
                in water splitting and solar cells, he developed chiral
                photoelectrodes for efficient hydrogen production using solar
                energy.
              </p>
              <p className="text-sm text-slate-600">
                He left the Weizmann Institute of Science in 2016 to join
                Chinhoyi University of Technology. During the years between 2007
                and 2013, Wilbert Mtangi served as a Junior Lecturer at the
                University of Pretoria in the Physics Department. To date, he
                has published at least 25 articles in peer-reviewed journals,
                has presented results of his research at 13 International
                conferences and produced 1 patent.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto w-full flex flex-col px-8 pb-16">
          <p className="text-slate-700 py-8 max-w-md font-semibold">
            Meet our team of engineers, business developers and software
            developers{" "}
          </p>

          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-16 gap-4">
            {roled_users.map((item, index) => (
              <UserItem
                key={index}
                picture={item.picture}
                name={item.name}
                role={item.role}
              />
            ))}
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

interface UserItemProps {
  picture: any;
  name: string;
  role: string;
}

const UserItem = ({ picture, name, role }: UserItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="image bg-slate-100 rounded h-60 overflow-hidden max-w-xs">
        <img src={picture.src} alt="" className="object-contain" />
      </div>
      <p className="text-lg font-semibold pt-2 text-slate-900">{name}</p>
      <p className="text-slate-400 text-sm">{role}</p>
      <div className="flex w-full pt-4">
        {/* <div className="flex self-center mx-auto rounded-full bg-primary-original text-white px-3 py-1">
          View Section
        </div> */}
      </div>
    </div>
  );
};

export default Team;
