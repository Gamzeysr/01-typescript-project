import { NextPage} from 'next';
import BlogCard from '../component/BlogCard';

interface Props {}

const Blogs: NextPage <Props>= () => {

return (

<div className='max-w-3xl mx-auto p-5 space-y-5'>
<BlogCard 
title="This is my blog" 
desc= "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit deserunt ea asperiores, maxime expedita odit debitis veritatis non optio. Animi."/>

<BlogCard 
title="This is my blog" 
desc= "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit deserunt ea asperiores, maxime expedita odit debitis veritatis non optio. Animi."/>


<BlogCard 
title="This is my blog" 
desc= "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit deserunt ea asperiores, maxime expedita odit debitis veritatis non optio. Animi."/>


</div>
)

};

export default Blogs;

