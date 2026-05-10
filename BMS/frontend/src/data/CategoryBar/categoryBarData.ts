export interface CategoryBarItem {
  id: number;
  label: string;
  path: string;
}

export const categoryBarData: CategoryBarItem[] = [
  {
    id: 1,
    label: "NEW ARRIVAL",
    path: "/new-arrival",
  },

  {
    id: 2,
    label: "MOST PICK",
    path: "/most-pick",
  },

  {
    id: 3,
    label: "SALE",
    path: "/sale",
  },

  {
    id: 4,
    label: "WOMEN",
    path: "/women",
  },

  {
    id: 5,
    label: "MEN",
    path: "/men",
  },

  {
    id: 6,
    label: "KIDS",
    path: "/kids",
  },

  {
    id: 7,
    label: "GENZ",
    path: "/genz",
  },

  {
    id: 8,
    label: "More",
    path: "/categories",
  },
];