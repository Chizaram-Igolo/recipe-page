export type Instruction = {
  [key in "point" | "note"]?: string;
};

export type RecipeData = {
  name: string;
  imageURL: string;
  introduction: string;
  ingredients: string[];
  instruction: Instruction[];
};
