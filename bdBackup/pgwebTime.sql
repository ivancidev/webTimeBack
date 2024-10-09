PGDMP                  	    |            webtime    16.4    16.4 #    6           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            7           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            8           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            9           1262    16698    webtime    DATABASE     �   CREATE DATABASE webtime WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Latin America.1252';
    DROP DATABASE webtime;
                postgres    false            �            1259    16699    autor    TABLE     m   CREATE TABLE public.autor (
    "codAutor" integer NOT NULL,
    "nombreAutor" character varying NOT NULL
);
    DROP TABLE public.autor;
       public         heap    postgres    false            �            1259    16704    autor_codautor_seq    SEQUENCE     {   CREATE SEQUENCE public.autor_codautor_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.autor_codautor_seq;
       public          postgres    false    215            :           0    0    autor_codautor_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.autor_codautor_seq OWNED BY public.autor."codAutor";
          public          postgres    false    216            �            1259    16705 	   categoria    TABLE     y   CREATE TABLE public.categoria (
    "codCategoria" integer NOT NULL,
    "nombreCategoria" character varying NOT NULL
);
    DROP TABLE public.categoria;
       public         heap    postgres    false            �            1259    16710    categoria_codcategoria_seq    SEQUENCE     �   CREATE SEQUENCE public.categoria_codcategoria_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.categoria_codcategoria_seq;
       public          postgres    false    217            ;           0    0    categoria_codcategoria_seq    SEQUENCE OWNED BY     [   ALTER SEQUENCE public.categoria_codcategoria_seq OWNED BY public.categoria."codCategoria";
          public          postgres    false    218            �            1259    16711    idioma    TABLE     l   CREATE TABLE public.idioma (
    "codIdioma" integer NOT NULL,
    idioma character varying(50) NOT NULL
);
    DROP TABLE public.idioma;
       public         heap    postgres    false            �            1259    16714    idioma_codidioma_seq    SEQUENCE     }   CREATE SEQUENCE public.idioma_codidioma_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.idioma_codidioma_seq;
       public          postgres    false    219            <           0    0    idioma_codidioma_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.idioma_codidioma_seq OWNED BY public.idioma."codIdioma";
          public          postgres    false    220            �            1259    16715    libro    TABLE     �  CREATE TABLE public.libro (
    "codLibro" integer NOT NULL,
    "nombreLibro" character varying(100) NOT NULL,
    sinopsis character varying(1000) NOT NULL,
    "enlaceLibro" character varying(200),
    "enlaceAudio" character varying(200),
    "enlacePortada" character varying(200),
    "codAutor" integer NOT NULL,
    "codCategoria" integer NOT NULL,
    "codIdioma" integer NOT NULL,
    "archivoPDF" bytea,
    "archivoAudio" bytea,
    "archivoPortada" bytea
);
    DROP TABLE public.libro;
       public         heap    postgres    false            �            1259    16720    libro_codlibro_seq    SEQUENCE     {   CREATE SEQUENCE public.libro_codlibro_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.libro_codlibro_seq;
       public          postgres    false    221            =           0    0    libro_codlibro_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.libro_codlibro_seq OWNED BY public.libro."codLibro";
          public          postgres    false    222            �           2604    16721    autor codAutor    DEFAULT     r   ALTER TABLE ONLY public.autor ALTER COLUMN "codAutor" SET DEFAULT nextval('public.autor_codautor_seq'::regclass);
 ?   ALTER TABLE public.autor ALTER COLUMN "codAutor" DROP DEFAULT;
       public          postgres    false    216    215            �           2604    16722    categoria codCategoria    DEFAULT     �   ALTER TABLE ONLY public.categoria ALTER COLUMN "codCategoria" SET DEFAULT nextval('public.categoria_codcategoria_seq'::regclass);
 G   ALTER TABLE public.categoria ALTER COLUMN "codCategoria" DROP DEFAULT;
       public          postgres    false    218    217            �           2604    16723    idioma codIdioma    DEFAULT     v   ALTER TABLE ONLY public.idioma ALTER COLUMN "codIdioma" SET DEFAULT nextval('public.idioma_codidioma_seq'::regclass);
 A   ALTER TABLE public.idioma ALTER COLUMN "codIdioma" DROP DEFAULT;
       public          postgres    false    220    219            �           2604    16724    libro codLibro    DEFAULT     r   ALTER TABLE ONLY public.libro ALTER COLUMN "codLibro" SET DEFAULT nextval('public.libro_codlibro_seq'::regclass);
 ?   ALTER TABLE public.libro ALTER COLUMN "codLibro" DROP DEFAULT;
       public          postgres    false    222    221            ,          0    16699    autor 
   TABLE DATA           :   COPY public.autor ("codAutor", "nombreAutor") FROM stdin;
    public          postgres    false    215   /'       .          0    16705 	   categoria 
   TABLE DATA           F   COPY public.categoria ("codCategoria", "nombreCategoria") FROM stdin;
    public          postgres    false    217   E(       0          0    16711    idioma 
   TABLE DATA           5   COPY public.idioma ("codIdioma", idioma) FROM stdin;
    public          postgres    false    219   )       2          0    16715    libro 
   TABLE DATA           �   COPY public.libro ("codLibro", "nombreLibro", sinopsis, "enlaceLibro", "enlaceAudio", "enlacePortada", "codAutor", "codCategoria", "codIdioma", "archivoPDF", "archivoAudio", "archivoPortada") FROM stdin;
    public          postgres    false    221   6)       >           0    0    autor_codautor_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.autor_codautor_seq', 18, true);
          public          postgres    false    216            ?           0    0    categoria_codcategoria_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.categoria_codcategoria_seq', 7, true);
          public          postgres    false    218            @           0    0    idioma_codidioma_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.idioma_codidioma_seq', 2, true);
          public          postgres    false    220            A           0    0    libro_codlibro_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.libro_codlibro_seq', 1, false);
          public          postgres    false    222            �           2606    16726    libro LIBRO_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.libro
    ADD CONSTRAINT "LIBRO_pkey" PRIMARY KEY ("codLibro");
 <   ALTER TABLE ONLY public.libro DROP CONSTRAINT "LIBRO_pkey";
       public            postgres    false    221            �           2606    16728    autor autor_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.autor
    ADD CONSTRAINT autor_pkey PRIMARY KEY ("codAutor");
 :   ALTER TABLE ONLY public.autor DROP CONSTRAINT autor_pkey;
       public            postgres    false    215            �           2606    16730    categoria categoria_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.categoria
    ADD CONSTRAINT categoria_pkey PRIMARY KEY ("codCategoria");
 B   ALTER TABLE ONLY public.categoria DROP CONSTRAINT categoria_pkey;
       public            postgres    false    217            �           2606    16732    idioma idioma_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.idioma
    ADD CONSTRAINT idioma_pkey PRIMARY KEY ("codIdioma");
 <   ALTER TABLE ONLY public.idioma DROP CONSTRAINT idioma_pkey;
       public            postgres    false    219            �           2606    16733    libro fk_codAutor    FK CONSTRAINT     �   ALTER TABLE ONLY public.libro
    ADD CONSTRAINT "fk_codAutor" FOREIGN KEY ("codAutor") REFERENCES public.autor("codAutor") NOT VALID;
 =   ALTER TABLE ONLY public.libro DROP CONSTRAINT "fk_codAutor";
       public          postgres    false    221    4755    215            �           2606    16738    libro fk_codCategoria    FK CONSTRAINT     �   ALTER TABLE ONLY public.libro
    ADD CONSTRAINT "fk_codCategoria" FOREIGN KEY ("codCategoria") REFERENCES public.categoria("codCategoria") NOT VALID;
 A   ALTER TABLE ONLY public.libro DROP CONSTRAINT "fk_codCategoria";
       public          postgres    false    217    221    4757            �           2606    16743    libro fk_codIdioma    FK CONSTRAINT     �   ALTER TABLE ONLY public.libro
    ADD CONSTRAINT "fk_codIdioma" FOREIGN KEY ("codIdioma") REFERENCES public.idioma("codIdioma") NOT VALID;
 >   ALTER TABLE ONLY public.libro DROP CONSTRAINT "fk_codIdioma";
       public          postgres    false    221    4759    219            ,     x�UOKN1]ۧ�	*B�,�~����ظ�M��TnÒs�b6����]�w�<��;�GWq���|r���1�?�6�*ݮO3�$W��}(cbZxw���*]r�}�ϭ�hž�>\�JN�5��n#�,��H�?���:����I�W0��&Mu���\��&��4�tD@s	Ӽ�L��b΂�w�Z��[�у����C�������U���hܡ5��@amK�����½0=�����&ii-�*_:���l�      .   �   x���
1���S��B��^�@P�,l��z�ٰID���^�;�a�af�jO���P�� \�����a�
a�F�+����_.Ԗ"��s����(������������Y�3�J(qŎ���=�Q���i_&Y��jk#��OX�H.h��#�X��b�r�(����M���c ���E      0   !   x�3�t-.H<�1?�ˈ�3/='��+F��� l�l      2      x������ � �     