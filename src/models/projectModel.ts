export interface Project {
  readonly id: number
  title: string
  date: string
  context: string
  team:string
  description: string
  technologies: string[]
  butSkills?: { name: string; level: string }[];

}
