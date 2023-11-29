type infoDataType = {
  icon: JSX.Element;
  text: string;
}[];

type qualificationDataType = (
  | {
      title: string;
      data: {
        university: string;
        qualification: string;
        years: string;
      }[];
    }
  | {
      title: string;
      data: {
        company: string;
        role: string;
        years: string;
      }[];
    }
)[];

type skillsDataTypes = {
  title: string;
  data: {
    name: string;
    icon: JSX.Element;
  }[];
}[];
type AboutGetDataTypes = qualificationDataType | skillsDataTypes;
