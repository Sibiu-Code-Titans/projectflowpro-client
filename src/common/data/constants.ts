import { TaskDetailsDescriptionHeadingOptionModel } from "../../pages/TaskDetailsPage/data/models/TaskDetailsDescriptionModels";
import { TaskDetailsSidebarPersonModel } from "../../pages/TaskDetailsPage/data/models/TaskDetailsSidebarModels";

export const HEXCODE_OPACITY_10 = "1A";
export const DATE_FORMAT = "dd MMM, yyyy";
export const MAX_N_ROWS = 3;

export const ALL_PERSONS: TaskDetailsSidebarPersonModel[] = [
  {
    id: "4",
    image:
      "https://media.licdn.com/dms/image/D4D03AQFHaxDTCNnEXQ/profile-displayphoto-shrink_800_800/0/1685466156795?e=1701907200&v=beta&t=fGAsu5L4sMJ4N9aks4ZKS5_D3fYZsQ-Ffh75-PfSiEw",
    name: "Stelian Gheorghe",
  },
  {
    id: "1",
    image:
      "https://media.licdn.com/dms/image/C5603AQE-kDPxKFhQwQ/profile-displayphoto-shrink_800_800/0/1626347346908?e=1701907200&v=beta&t=-oIA-NpAA1fLPwZi38unBev_vdEeqnR_M9VPahIC7Rw",
    name: "Bogdan Dimoiu",
  },
  {
    id: "2",
    image:
      "https://media.licdn.com/dms/image/D4E35AQGLfmRiXaiEdA/profile-framedphoto-shrink_800_800/0/1686831931072?e=1697965200&v=beta&t=F2olugojRgUIzFGy-t3eDnAkzB-XEvXhU7u3r9-SDiE",
    name: "Darius Rusu",
  },
  {
    id: "5",
    image:
      "https://media.licdn.com/dms/image/D4D03AQFxieSDkBgAgw/profile-displayphoto-shrink_800_800/0/1688561842943?e=1701907200&v=beta&t=3yiTPnlUQmuUi_mJHybCD_Bo6-EsWx1xo8KMt_2cKv0",
    name: "Daniel Ilie",
  },
  {
    id: "3",
    image:
      "https://media.licdn.com/dms/image/D4E03AQHH85ODHCh_-Q/profile-displayphoto-shrink_800_800/0/1671533097756?e=1701907200&v=beta&t=vgXDw-_SzFvQGYzL6nnGlN6OWQk32L3_Ll4Sjsamprs",
    name: "Iulian Curelea",
  },
];
export const ALL_TAGS = [
  {
    id: "1",
    name: "Frontend", // must be name for reusability
    color: "#ff0000",
  },
  {
    id: "2",
    name: "Backend",
    color: "#0000ff",
  },
  {
    id: "3",
    name: "Testing",
    color: "#ff00ff",
  },
];

export const COLORS_PANEL_OPTIONS = [
  ["#172b4d", "#758195", "#fff"],
  ["#0055cc", "#1d7afc", "#cce0ff"],
  ["#206A83", "#2898bd", "#c6edfb"],
  ["#216e4e", "#22a06b", "#baf3db"],
  ["#e56910", "#fea362", "#f8e6a0"],
  ["#ae2e24", "#c9372c", "#ffd5d2"],
  ["#5e4db2", "#8270db", "#dfd8fd"],
];

export const HEADINGS_OPTIONS: TaskDetailsDescriptionHeadingOptionModel[] = [
  {
    level: 0,
    label: "Normal text",
    name: "Normal text",
  },
  {
    level: 1,
    label: "Heading 1",
    name: "<h1>Heading 1</h1>",
  },
  {
    level: 2,
    label: "Heading 2",
    name: "<h2>Heading 2</h2>",
  },
  {
    level: 3,
    label: "Heading 3",
    name: "<h3>Heading 3</h3>",
  },
  {
    level: 4,
    label: "Heading 4",
    name: "<h4>Heading 4</h4>",
  },
  {
    level: 5,
    label: "Heading 5",
    name: "<h5>Heading 5</h5>",
  },
];
