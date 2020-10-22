import teamMemberTags from './teamMemberTags'; 

const teamMembers = [
    {
        name: 'Anri', 
        description: 'Role',
        imageUrl: process.env.PUBLIC_URL + 'assets/profile.jpg',
        tags: teamMemberTags[0],
        bio: 'this is anri\'s bio'
    }, 

    {
        name: 'Jenny', 
        description: 'Role',
        imageUrl: process.env.PUBLIC_URL + 'assets/profile.jpg',
        tags: teamMemberTags[1],
        bio: 'this is jenny\'s bio'
    }, 

    {
        name: 'Min', 
        description: 'Role',
        imageUrl: process.env.PUBLIC_URL + 'assets/profile.jpg',
        tags: teamMemberTags[2],
        bio: 'this is Min\'s bio'
    }, 

    {
        name: 'Sylvia', 
        description: 'Role',
        imageUrl: process.env.PUBLIC_URL + 'assets/profile.jpg',
        tags: teamMemberTags[3],
        bio: 'this is Sylvia\'s bio'
    }, 

    {
        name: 'Vanessa', 
        description: 'Frontend Developer',
        imageUrl: process.env.PUBLIC_URL + 'assets/Vanessa.png',
        tags: teamMemberTags[4],
        bio: 'this is Vanessa\'s bio'
    }, 

]; 

export default teamMembers;