// export interface Counsel {
//   id: number
//   date: string
//   count?: number
//   title: string
//   state?: number
//   clientCount?: number
//   price?: number
//   introduction?: string
//   weekCount?: number
// }

// export interface Curriculrum  {
//   id: number
//   title: string
//   content: string
// }

// export interface Consulting  {
//   id: number
//   date: string
//   content: string
//   state?: number
// }

export interface TestimonyData {
  id: number
  date: string
  consulting: string
  nickname: string
  userId: number
  counselTitle: string
  counselId: number
}
export interface PostTestimonyData {
  content: string
  userId: number
  counselId: number
}
//상담일지
export interface CounselJournalData {
  id: number
  date: string
  content: string
  nickname: string
  userId: number
  counselTitle: string
  counselId: number
}

// 소감문
export interface RolePlayData {}
