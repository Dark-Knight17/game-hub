
type Input = {
    id: number,
    name: string
}
export function useFind<T extends Input>(data: T[], targetId?: number): T | null{
   return targetId ?  data.find((item) => item.id  === targetId) ?? null : null;
}