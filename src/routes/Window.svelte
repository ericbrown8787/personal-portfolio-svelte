<article>
    <div class="window-top">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="window-content">
<slot/>
    </div>
</article>

<style>
    article {
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid var(--accent-color);
    gap: 1rem;
}

.window-top{
    display: flex;
    padding: 7px;
    padding-block-start: 5px;
    align-items: center;
    justify-content: flex-end;
    gap: 7px;
    content: "";
    /* height: 30px; */
    width: 100%;
    background-color: var(--accent-color);    
}
.window-top div{
    width: 30px;
    height: 30px;
    border-radius: 4px;
    color: var(--accent-color);
    border: 2px solid var(--main-background-color);
}
.window-content{
    padding: 1rem;
}
:global(.window-content h2){
    margin-block-end: 1ch;
}
:global(.window-content h2>*){
    display: block;
}

:global(.window-content p){
    margin-block: 1ch;
}

:global(.window-content a){
    border-block-end: 1px solid var(--accent-color);
}
:global(.window-content a:focus::before,.window-content a:hover::before){
    content: ">";
}

:global(.window-content a::before){
    content: ">";
}
@media(min-width: 768px){
    :global(.window-content a:focus::before){
        color: pink;
    }
    :global(.window-content a:not(:hover)::before){
        content:""
    }
}
</style>