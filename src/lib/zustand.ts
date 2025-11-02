import { create } from 'zustand';

interface PrimaryKeyState {
	primaryKey: string;
	setPrimaryKey: (primaryKey: string) => void;
}

export const usePrimaryKeyStore = create<PrimaryKeyState>()((set) => ({
	primaryKey: '',
	setPrimaryKey: (primaryKey: string) => set({ primaryKey }),
}));

export const useDataState = create<any>()((set) => ({
	data: null,
	setData: (data: any) => set({ data }),
}));
